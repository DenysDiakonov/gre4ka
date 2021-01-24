import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { STATS_API_ENDPOINT } from "../../config";
import { sendRequest } from "./../../helpers/functions";
import LineChart from "./../HelperComponents/LineChart/LineChart";
import "./ProductDetails.scss";

const ProductDetails = () => {
    const { slug } = useParams();
    const [data, setData] = useState([]);
    let actualData = data[data.length - 1];
    // const {
    //     link,
    //     image,
    //     price,
    //     price_for_kilo,
    //     shop,
    //     title,
    //     weight,
    // } = actualData;
    useEffect(() => {
        sendRequest(`${STATS_API_ENDPOINT}/price-history/${slug}`, "GET").then((res) => setData(res));
    }, []);
    return (
        <div className="details">
            <div className="details-chart">
                <LineChart data={data} />
            </div>
            <div className="details-content">
                <div className="details-content-img">
                    <div className="details-title">{actualData && actualData.title}</div>
                    <img src={actualData && actualData.image} alt="product" />
                </div>
                <div>
                    <div className="details-data">
                        <div className="details-price">{actualData && actualData.price.toFixed(2)} грн</div>
                        <div className="details-weight">
                            <div className="details-weight-kg">Вага: {actualData && actualData.weight}</div>
                        </div>
                        {/* <div>{actualData && actualData.shop}</div> */}
                    </div>
                    <a target="_blank" rel="noreferrer" className="btn" href={`${actualData && actualData.link}`}>
                        Перейти до товару
                    </a>
                    <div className="details-weight-price">
                        Ціна за 1 кг: {actualData && actualData.price_for_kilo.toFixed(2)} грн
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
