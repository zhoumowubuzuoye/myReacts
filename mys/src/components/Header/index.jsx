import React, { Component } from "react";
import "./index.css";
export default class Header extends Component {
  setFrom = () => {
    return (event) => {
      this.props.setDoString(event.target.value);
    };
  };
  keyDown = (e) => {
    if (this.props.doString.length > 0) {
      if (e.keyCode === 13) {
        this.props.addDo();
      }
    }
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          name="doString"
          onChange={this.setFrom("doString")}
          onKeyDown={this.keyDown}
          value={this.props.doString}
        />
      </div>
    );
  }
}
