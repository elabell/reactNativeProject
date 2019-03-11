import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import * as serviceWorker from "./serviceWorker";
import Route from "./Route";
import { BrowserRouter as Router } from "react-router-dom";

const Liste = () => (
  <Router>
    <div>
      <Route />
    </div>
  </Router>
);
ReactDOM.render(<Liste />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
