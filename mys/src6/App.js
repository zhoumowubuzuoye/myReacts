import React, { Component } from "react";
import "./App.less";
import Counts from "./containers/Counts";

export default class App extends Component {
  render() {
    return (
      <div>
        <Counts />
      </div>
    );
  }
}
