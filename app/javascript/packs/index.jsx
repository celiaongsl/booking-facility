import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from "../pages/App";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Things I want to try and include: Filtering by Floor, Features/Assets and Capacity
// Might be tough to filter by assets
// Filtering by date&time availability (how ah LOL)
// What about moving from body into params? hmm
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={App} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
