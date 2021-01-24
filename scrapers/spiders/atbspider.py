import scrapy
import re

from .utils import get_price_for_kilo


class ATBSpider(scrapy.Spider):
    name = "atbspider"
    start_urls = ["https://zakaz.atbmarket.com/catalog/582/107?newstore=582"]

    def __init__(self, data, **kwargs):
        self.data = data
        super().__init__(**kwargs)

    def parse(self, response):
        for product in response.css(".product-wrap"):
            title = product.css(".product-detail").xpath("*/div/text()").get()
            if "гречана" in title.lower():
                price_seclector = product.xpath("*//span[contains(@class, 'price')]")
                price = float(
                    price_seclector.xpath("text()").get()
                    + "."
                    + price_seclector.xpath("*/text()").get()
                )
                weight_search = re.search(r"(\d+,\d+ кг)|(\d+ кг)", title)
                weight = (
                    weight_search.group(1)
                    if weight_search.group(1)
                    else weight_search.group(2)
                )
                obj = {
                    "title": title,
                    "price": price,
                    "weight": weight,
                    "image": product.xpath(
                        "*//img[contains(@class, 'img-fluid blur-up lazyload bg-img')]/@src"
                    ).get(),
                    "link": "https://zakaz.atbmarket.com"
                    + product.css(".product-detail").xpath("*/@href").get(),
                    "price_for_kilo": get_price_for_kilo(weight, price),
                    "shop": "atb",
                }
                self.data.append(obj)
                yield obj

        if (
            response.xpath("//ul[@class='pagination']/*[last()]/@class").get()
            == "page-item next"
        ):
            for next_page in response.xpath("//ul[@class='pagination']/*[last()]/a"):
                yield response.follow(next_page, self.parse)