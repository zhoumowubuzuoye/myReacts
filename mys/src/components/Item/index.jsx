import React, { Component } from "react";
import "./index.css";
import List from "./components";
export default class Item extends Component {
  render() {
    return (
      <div className="row">
        <List />
      </div>
    );
  }
}
