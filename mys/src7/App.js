import React, { Component } from "react";
import "./App.less";
import Counts from "./containers/Counts";
import Person from "./containers/Person";
export default class App extends Component {
  render() {
    return (
      <div>
        <Counts />
        <Person />
      </div>
    );
  }
}
