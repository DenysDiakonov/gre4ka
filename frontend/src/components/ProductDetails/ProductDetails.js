import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { STATS_API_ENDPOINT } from "../../config";
import { sendRequest } from "./../../helpers/functions";

const ProductDetails = () => {
    const { slug } = useParams();
    console.log(slug);
    useEffect(() => {
        sendRequest(
            `${STATS_API_ENDPOINT}/price-history/${slug}`,
            "GET"
        );
    }, []);
    return <div>1</div>;
};

export default ProductDetails;
