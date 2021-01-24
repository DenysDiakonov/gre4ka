from spiders import *
from spiders.utils import get_from_spider
from fastapi import FastAPI

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/metro/")
async def metro():
    return get_from_spider(MetroSpider)


@app.get("/api/atb/")
async def atb():
    return get_from_spider(ATBSpider)


@app.get("/api/novus/")
async def novus():
    return get_from_spider(NovusSpider)


@app.get("/api/silpo/")
async def silpo():
    return get_silpo()