import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Dashboard from "./views/Dashboard.js";
import Login from "./views/Login.js";
import Product from "./views/Product.js";
import ProductHighlights from "./views/ProductHighlights.js";
import Sidebar from "./components/Sidebar.js";
import Faq from "./views/Faq.js";
import QuestionList from "./views/QuestionList.js";
import HomePage from "./views/HomePage.js";
const Index = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/product-highlights" component={ProductHighlights} />
        <Route exact path="/home-page-information" component={HomePage} />
        <Route exact path="/question-list" component={QuestionList} />
        <Route exact path="/faq" component={Faq} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}

export default Index;
