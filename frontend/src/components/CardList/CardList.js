import React, { useEffect, useState } from "react";
import { sendRequest } from "./../../helpers/functions";
import Card from "../HelperComponents/Card/Card";
import "./CardList.scss";
import { SCRAPERS_API_ENDPOINT } from "../../config";

const CardList = ({ conditionArr, sortOption }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        Promise.all([
            sendRequest(
                `${SCRAPERS_API_ENDPOINT}/metro/`,
                "GET"
            ),
            sendRequest(`${SCRAPERS_API_ENDPOINT}/atb/`, "GET"),
            sendRequest(
                `${SCRAPERS_API_ENDPOINT}/novus/`,
                "GET"
            ),
        ]).then((res) => setData(res.flat()));
    }, []);
    const conditionFunc = (element, length) => {
        if (conditionArr && conditionArr.length === 0) return true;
        if (conditionArr && conditionArr.length === 1)
            return element === conditionArr[0];
        if (conditionArr && conditionArr.length === 2)
            return element === conditionArr[0] || element === conditionArr[1];
        if (conditionArr && conditionArr.length === 3)
            return (
                element === conditionArr[0] ||
                element === conditionArr[1] ||
                element === conditionArr[2]
            );
    };
    const sortFormatter = (a, b) => {
        if (sortOption === "price-up") {
            if (a.price > b.price) {
                return 1;
            }
            if (a.price < b.price) {
                return -1;
            }
            return 0;
        } else if (sortOption === "price-down") {
            if (a.price < b.price) {
                return 1;
            }
            if (a.price > b.price) {
                return -1;
            }
            return 0;
        } else if (sortOption === "kg-up") {
            if (a.price_for_kilo > b.price_for_kilo) {
                return 1;
            }
            if (a.price_for_kilo < b.price_for_kilo) {
                return -1;
            }
            return 0;
        } else if (sortOption === "kg-down") {
            if (a.price_for_kilo < b.price_for_kilo) {
                return 1;
            }
            if (a.price_for_kilo > b.price_for_kilo) {
                return -1;
            }
            return 0;
        }
    };

    data.sort(sortFormatter);

    return (
        <div className="card-list">
            {data
                .filter((el) => conditionFunc(el.shop))
                .map((item, idx) => {
                    return <Card key={idx} {...item} />;
                })}
        </div>
    );
};

export default CardList;
