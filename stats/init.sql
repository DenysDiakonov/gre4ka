CREATE TABLE product (
    id serial PRIMARY KEY,
    title VARCHAR (250) NOT NULL,
    weight VARCHAR (250) NOT NULL,
    image VARCHAR (250) NOT NULL,
    link VARCHAR (250) NOT NULL,
    shop VARCHAR (250) NOT NULL,
    price REAL NOT NULL,
    price_for_kilo REAL,
    date_created TIMESTAMP NOT NULL
);