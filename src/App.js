import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product-checkout" component={ProductPage} />
      </Switch>
    </>
  );
}

export default App;
