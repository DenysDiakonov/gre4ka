import React from "react";
import "../../style/main.scss";
import { Context as ResponsiveContext } from "react-responsive";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./../../components/Header/Header";
import Catalog from "../Catalog/Catalog";
import ProductDetails from "./../ProductDetails/ProductDetails";

const App = () => {
    return (
        <ResponsiveContext.Provider>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Catalog} />
                    <Route path="/:slug" component={ProductDetails} />
                    <Route render={() => <div>404</div>} />
                </Switch>
            </Router>
        </ResponsiveContext.Provider>
    );
};

export default App;
