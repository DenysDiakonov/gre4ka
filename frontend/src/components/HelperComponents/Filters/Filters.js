import React, { useCallback, useState } from "react";
import "./Filters.scss";
import { Checkbox } from "@atlaskit/checkbox";
import metro from "../../../assets/images/metro-filter.PNG";
import atb from "../../../assets/images/atb-filter.jpg";
import novus from "../../../assets/images/novus-filter.PNG";
import Select from "react-select";
import silpo from "../../../assets/images/silpo.svg";

const Filters = ({
    atbFilter,
    novusFilter,
    metroFilter,
    setAtbFilter,
    setNovusFilter,
    setMetroFilter,
    sortSelected,
    setSortSelected,
    setSilpoFilter,
    silpoFilter
}) => {
    const handleChange = (selectedOption) => {
        setSortSelected(selectedOption);
    };
    const onChangeMetro = useCallback((event) => {
        setMetroFilter((metroFilter) => !metroFilter);
    }, []);
    const onChangeAtb = useCallback((event) => {
        setAtbFilter((atbFilter) => !atbFilter);
    }, []);
    const onChangeNovus = useCallback((event) => {
        setNovusFilter((novusFilter) => !novusFilter);
    }, []);
    const onChangeSilpo = useCallback((event) => {
        setSilpoFilter((silpoFilter) => !silpoFilter);
    }, []);

    const options = [
        { value: "price-up", label: "За ціною ▲" },
        { value: "price-down", label: "За ціною ▼" },
        {
            value: "kg-up",
            label: "За ціною за кг ▲"
        },
        {
            value: "kg-down",
            label: "За ціною за кг ▼"
        }
    ];

    return (
        <div className="filters-wrap">
            <div className="filters">
                <div className="filters-items">
                    <p>Фільтри</p>
                    <div>
                        <Checkbox
                            isChecked={metroFilter}
                            onChange={onChangeMetro}
                            value="Controlled Checkbox"
                            name="controlled-checkbox"
                            id="metro"
                        />
                        <label htmlFor="metro">
                            <img src={metro} />
                        </label>
                    </div>
                    <div>
                        <Checkbox
                            isChecked={atbFilter}
                            onChange={onChangeAtb}
                            value="Controlled Checkbox"
                            name="controlled-checkbox"
                            id="atb"
                        />
                        <label htmlFor="atb">
                            <img src={atb} />
                        </label>
                    </div>
                    <div>
                        <Checkbox
                            isChecked={novusFilter}
                            onChange={onChangeNovus}
                            value="Controlled Checkbox"
                            name="controlled-checkbox"
                            id="novus"
                        />
                        <label htmlFor="novus">
                            <img src={novus} />
                        </label>
                    </div>
                    <div>
                        <Checkbox
                            isChecked={silpoFilter}
                            onChange={onChangeSilpo}
                            value="Controlled Checkbox"
                            name="controlled-checkbox"
                            id="silpo"
                        />
                        <label htmlFor="silpo">
                            <img src={silpo} />
                        </label>
                    </div>
                </div>
                <div>
                    <p>Сортування</p>
                    <Select
                        options={options}
                        className="select_component"
                        classNamePrefix="select"
                        value={sortSelected}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
