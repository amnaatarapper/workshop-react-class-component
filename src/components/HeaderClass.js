/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class HeaderClass extends Component {
  constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);
  }
  callback(event) {
    console.log("event", event);
    console.log("image clicked");
  }
  render() {
    return (
      <header id="header">
        <h1 onClick={this.callback()}>
          <strong>Multiverse</strong> by HTML5 UP
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#footer" className="icon solid fa-info-circle">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderClass;
