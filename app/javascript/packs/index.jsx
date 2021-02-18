import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import App from "../pages/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reducer from "../state/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(Reducer);
// Things I want to try and include: Filtering by Floor, Features/Assets and Capacity
// Might be tough to filter by assets
// Filtering by date&time availability (how ah LOL)
// What about moving from body into params? hmm

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});
