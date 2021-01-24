![code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)

## Gre4ka scrapers backend

### **Запуск через Docker**

 - Собрать образ ```$ docker build -t gre4ka_scraper ./```
 
 - Запустить ```$ docker run -d --name scrapercontainer -p 8000:8000 gre4ka_scraper```

### **Запуск нативно**

 - Установить виртальную среду (если не установлена) ```$ pip install virtualenv```
 
 - Создать среду ```$ virtualenv -p python3 env``` или ```$ virtualenv env```
 
 - Активировать среду ```$ source env/bin/activate``` или ```$ env/Scripts/activate.ps1```
  
 - Установить зависимости ```$ pip install -r requirements.txt```
 
 - Запустить сервер ```$ uvicorn main:app --reload```
