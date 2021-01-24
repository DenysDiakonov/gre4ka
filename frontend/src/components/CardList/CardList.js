import React from "react";

import Card from "../HelperComponents/Card/Card";
import "./CardList.scss";

const CardList = ({ conditionArr, sortOption, data, setData }) => {
    const conditionFunc = (element) => {
        if (conditionArr && conditionArr.length === 0) return true;
        if (conditionArr && conditionArr.length === 1) return element === conditionArr[0];
        if (conditionArr && conditionArr.length === 2)
            return element === conditionArr[0] || element === conditionArr[1];
        if (conditionArr && conditionArr.length === 3)
            return element === conditionArr[0] || element === conditionArr[1] || element === conditionArr[2];
        if (conditionArr && conditionArr.length === 4)
            return (
                element === conditionArr[0] ||
                element === conditionArr[1] ||
                element === conditionArr[2] ||
                element === conditionArr[3]
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
