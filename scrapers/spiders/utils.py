from scrapy.crawler import CrawlerRunner
from twisted.internet import reactor
from multiprocessing import Process, Manager


def get_from_spider(klass):
    manager = Manager()
    result = manager.dict()
    p = Process(
        target=get_spider_results,
        args=(
            klass,
            result,
        ),
    )
    p.start()
    p.join()
    return result["result"]


def get_spider_results(klass, result):
    runner = CrawlerRunner()
    data = []
    d = runner.crawl(klass, data)
    d.addBoth(lambda _: reactor.stop())
    reactor.run()
    result["result"] = data


def get_price_for_kilo(weight_str: str, price: float):
    weight, unit = weight_str.split(" ")
    weight = float(weight.replace(",", "."))
    if unit == "г":
        weight /= 1000
    return round(price / weight, 2)