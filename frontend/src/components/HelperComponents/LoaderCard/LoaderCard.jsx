import React from "react";
import Tilt from "react-tilt";
import { BarLoader } from "react-spinners";

import atb from "../../../assets/images/atb-card.PNG";
import novus from "../../../assets/images/novus-card.PNG";
import metro from "../../../assets/images/metro-card.PNG";
import silpo from "../../../assets/images/silpo.svg";
import check from "../../../assets/images/check-mark.svg";

import "./LoaderCard.scss";

const LoaderCard = ({ shop = "silpo", loading = true }) => {
    return (
        <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 100, width: 304 }}>
            <div className="Tilt-inner loader-card">
                <img
                    className="img-logo"
                    src={shop === "atb" ? atb : shop === "novus" ? novus : shop === "metro" ? metro : silpo}
                    alt="shop-logo"
                />
                {loading ? (
                    <BarLoader width={200} color="#a16600" />
                ) : (
                    <img className="check" src={check} alt="check" />
                )}
            </div>
        </Tilt>
    );
};

export default LoaderCard;
