import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import LandingPage from "../pages/LandingPage";

// Things I want to try and include: Filtering by Floor, Features/Assets and Capacity
// Might be tough to filter by assets
// Filtering by date&time availability (how ah LOL)
// What about moving from body into params? hmm
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <LandingPage />,
    document.body.appendChild(document.createElement('div')),
  )
})
