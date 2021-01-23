import React, { useState } from "react";
import Filters from "./../HelperComponents/Filters/Filters";

import "./Catalog.scss";
import CardList from "./../CardList/CardList";

const Catalog = () => {
    const [atbFilter, setAtbFilter] = useState(false);
    const [novusFilter, setNovusFilter] = useState(false);
    const [metroFilter, setMetroFilter] = useState(false);
    const [sortSelected, setSortSelected] = useState({
        value: "price-up",
        label: "За ціною ▲",
    });

    const conditionArr = [];
    atbFilter && conditionArr.push("atb");
    novusFilter && conditionArr.push("novus");
    metroFilter && conditionArr.push("metro");

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
            />
            <div>
                <CardList
                    conditionArr={conditionArr}
                    sortOption={sortSelected.value}
                />
            </div>
        </div>
    );
};

export default Catalog;
