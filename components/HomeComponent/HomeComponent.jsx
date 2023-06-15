import React, { Component } from 'react'

export class HomeComponent extends Component {
  render() {
    return (
      <>
      <h2>Welcome to Movie Recommendation</h2>

      <ul>
        <li>Thriller</li>
        <li>Action</li>
        <li>Fantasy</li>
        <li>Drama</li>
        <li>Comedy</li>
      </ul>
      </>
    )
  }
}

export default HomeComponent