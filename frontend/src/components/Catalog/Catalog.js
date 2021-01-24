import React, { useEffect, useState } from "react";
import { SCRAPERS_API_ENDPOINT } from "../../config";
import Filters from "./../HelperComponents/Filters/Filters";

import "./Catalog.scss";
import CardList from "./../CardList/CardList";
import LoaderCard from "../HelperComponents/LoaderCard/LoaderCard";

const Catalog = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState({
        atb: true,
        metro: true,
        novus: true,
        silpo: true
    });

    const [atbFilter, setAtbFilter] = useState(false);
    const [novusFilter, setNovusFilter] = useState(false);
    const [metroFilter, setMetroFilter] = useState(false);
    const [silpoFilter, setSilpoFilter] = useState(false);
    const [sortSelected, setSortSelected] = useState({
        value: "price-up",
        label: "За ціною ▲"
    });

    const sendRequest = (shop) => {
        return fetch(`${SCRAPERS_API_ENDPOINT}/${shop}/`, { method: "GET" }).then((response) => {
            setLoading((loading) => ({ ...loading, [shop]: false }));
            return response.json();
        });
    };

    useEffect(async () => {
        Promise.all([
            sendRequest("metro"),
            sendRequest("atb"),
            sendRequest("novus"),
            sendRequest("silpo")
        ]).then((res) => setData(res.flat()));
    }, []);

    const conditionArr = [];
    atbFilter && conditionArr.push("atb");
    novusFilter && conditionArr.push("novus");
    metroFilter && conditionArr.push("metro");
    silpoFilter && conditionArr.push("silpo");

    if (Object.values(loading).some((i) => i))
        return (
            <div className="catalog-loaders">
                <LoaderCard shop="metro" loading={loading.metro} />
                <LoaderCard shop="atb" loading={loading.atb} />
                <LoaderCard shop="novus" loading={loading.novus} />
                <LoaderCard shop="silpo" loading={loading.silpo} />
            </div>
        );
    else
        return (
            <div className="catalog">
                <Filters
                    atbFilter={atbFilter}
                    novusFilter={novusFilter}
                    metroFilter={metroFilter}
                    setAtbFilter={setAtbFilter}
                    setNovusFilter={setNovusFilter}
                    setMetroFilter={setMetroFilter}
                    sortSelected={sortSelected}
                    setSortSelected={setSortSelected}
                    silpoFilter={silpoFilter}
                    setSilpoFilter={setSilpoFilter}
                />
                <div>
                    <CardList
                        conditionArr={conditionArr}
                        sortOption={sortSelected.value}
                        data={data}
                        setData={setData}
                    />
                </div>
            </div>
        );
};

export default Catalog;
