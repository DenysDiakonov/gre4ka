import requests
import re

URL = "https://api.catalog.ecom.silpo.ua/api/2.0/exec/EcomCatalogGlobal"

body = {
    "data": {
        "CategoryFilter": [],
        "From": 1,
        "MultiFilters": {},
        "Promos": [],
        "RangeFilters": {},
        "To": 30,
        "UniversalFilters": [],
        "businessId": 1,
        "categoryId": 83,
        "deliveryType": 1,
        "filialId": 2042,
    },
    "method": "GetSimpleCatalogItems",
}
headers = {"content-type": "application/json"}


def get_silpo():
    r = requests.post(URL, json=body, headers=headers)

    items = []
    for i in r.json()["items"]:
        title = i["name"]
        price = i["price"]
        image = i["mainImage"]
        link = f'https://shop.silpo.ua/detail/{i["id"]}'
        weight = i["unit"]

        unit = None
        price_for_kilo = None
        if "*" not in i["unit"]:
            if i["unit"][-2:] == "кг":
                unit = "кг"
            elif i["unit"][-1] == "г":
                unit = "г"

            if unit:
                mass = float("".join(re.findall(r"\d+", i["unit"])))
                if unit == "г":
                    mass /= 1000
                price_for_kilo = round(price / mass, 2)

        items.append(
            {
                "title": title,
                "price": price,
                "weight": weight,
                "image": image,
                "link": link,
                "price_for_kilo": price_for_kilo,
                "shop": "silpo",
            }
        )

    return items