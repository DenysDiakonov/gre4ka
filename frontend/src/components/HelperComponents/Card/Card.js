import React from "react";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import "./Card.scss";
import atb from "../../../assets/images/atb-card.PNG";
import novus from "../../../assets/images/novus-card.PNG";
import metro from "../../../assets/images/metro-card.PNG";
import silpo from "../../../assets/images/silpo.svg";

const Card = ({ image, price, price_for_kilo, shop, title, weight }) => {
    return (
        <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 358, width: 304 }}>
            <div className="Tilt-inner">
                <Link to={`/${title}`} className="card">
                    <div className="img">
                        <img className="img-photo" src={image} alt="product" />
                        <img
                            className="img-logo"
                            src={shop === "atb" ? atb : shop === "novus" ? novus : shop === "metro" ? metro : silpo}
                            alt="shop-logo"
                        />
                    </div>
                    <div className="title">{title}</div>
                    <div>
                        <span className="price">{price.toFixed(2)} грн</span>
                    </div>
                    <div className="card-bottom">
                        <div className="weight">
                            <span>{weight}</span>
                        </div>
                        {price_for_kilo && (
                            <div>
                                <span>Ціна за 1 кг: </span>
                                <span>{price_for_kilo.toFixed(2)} грн</span>
                            </div>
                        )}
                    </div>
                </Link>
            </div>
        </Tilt>
    );
};

export default Card;
