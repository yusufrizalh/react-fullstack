import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.min.css";
import ListProduct from "./components/ListProduct";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <Router>
      <div className="container p-2 is-max-widescreen">
        <div className="columns">
          <div className="column is-full">
            <Switch>
              <Route exact path="/">
                <ListProduct />
              </Route>
              <Route path="/addproduct">
                <AddProduct />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
