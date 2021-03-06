import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import List from "./pages/List";
import Details from "./pages/Details";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="list" name="list" component={List}></Route>
      <Route path="details(/:id)" name="details" component={Details}></Route>
    </Route>
  </Router>,
app);
