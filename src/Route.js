import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Details from "./Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
};
export default Routes;
