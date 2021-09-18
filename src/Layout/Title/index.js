import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./Title.css"

class Title extends Component {
  render() {
    return <div className="Title-container">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">5 Điều Bác Hồ Dạy</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  </div>
  }
}

export default Title;
