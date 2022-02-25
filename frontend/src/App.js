import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.min.css";

import Home from "./components/home/Home";

import ListProduct from "./components/products/ListProduct";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";

import ListCategory from "./components/categories/ListCategory";
import AddCategory from "./components/categories/AddCategory";
import EditCategory from "./components/categories/EditCategory";

const App = () => {
  return <Router>
      <div className="container p-2 is-max-widescreen">
        <div className="columns">
          <div className="column is-full">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/products">
                <ListProduct />
              </Route>
              <Route path="/product/add">
                <AddProduct />
              </Route>
              <Route path="/product/edit/:id">
                <EditProduct />
              </Route>

              <Route path="/categories">
                <ListCategory />
              </Route>
              <Route path="/category/add">
                <AddCategory />
              </Route>
              <Route path="/category/edit/:id">
                <EditCategory />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>;
};

export default App;
