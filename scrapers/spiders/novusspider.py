import scrapy

from .utils import get_price_for_kilo


class NovusSpider(scrapy.Spider):
    name = "novusspider"
    start_urls = ["https://novus.zakaz.ua/uk/categories/buckwheat/"]

    def __init__(self, data, **kwargs):
        self.data = data
        super().__init__(**kwargs)

    def parse(self, response):
        for product in response.css(".products-box__list-item"):
            price = float(
                product.xpath(
                    "*//span[contains(@class, 'Price__value_caption')]/text()"
                ).get()
            )
            weight = product.xpath(
                "*//div[contains(@class, 'product-tile__weight')]/text()"
            ).get()
            obj = {
                "title": product.xpath(
                    "*//span[contains(@class, 'product-tile__title')]/text()"
                ).get(),
                "price": price,
                "weight": weight,
                "image": product.xpath(
                    "*//img[contains(@class, 'product-tile__image-i')]/@src"
                ).get(),
                "link": "https://novus.zakaz.ua" + product.xpath("*/@href").get(),
                "price_for_kilo": get_price_for_kilo(weight, price),
                "shop": "novus",
            }
            self.data.append(obj)
            yield obj