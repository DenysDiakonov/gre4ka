import React from "react";
import "./Header.scss";
import grechka from "../../assets/images/Gre4ka_sm.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <span>GRE</span>
                <div>
                    <img src={grechka} alt="grechka" />
                </div>
                <span>KA</span>
            </Link>
        </header>
    );
};

export default Header;
