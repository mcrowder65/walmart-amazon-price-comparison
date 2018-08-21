import React from "react";
import { Router as BrowserRouter } from "react-router-dom";
import { Route } from "react-router";

import { browserHistory } from "./browser-history";
import Items from "./components/items";
import Item from "./components/item";
import ManualItems from "./components/manual-items";

const Router = () => (
  <BrowserRouter history={browserHistory}>
    <div>
      <Route exact path="/" component={Items} />
      <Route path="/manual-items" component={ManualItems} />
      <Route path="/item" component={Item} />
      <Route path="/item/:itemId" component={Item} />
    </div>
  </BrowserRouter>
);

export default Router;
