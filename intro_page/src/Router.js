import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./test_component/Home";
import AboutUs from "./test_component/AboutUs";
import Contact from "./test_component/Contact";
import {BrowserRouter, Route} from "react-router-dom"
const Router = () => {
    return (
        <BrowserRouter>
            <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/aboutUs" component={AboutUs} />
                <Route exact path="/contact" component={Contact} />
            <Footer />
        </BrowserRouter>
    )
}

export default Router;
