import React, { Component } from "react";
import "./index.css";
export default class Footer extends Component {
  chooseAllChecked = () => {
    const { allChecked, allCheckedButton } = this.props;
    allCheckedButton(!allChecked);
  };
  render() {
    const { doList, allChecked } = this.props;
    const checked = doList.filter((item) => {
      return item.checked === "";
    }).length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.chooseAllChecked}
            checked={allChecked}
          />
        </label>
        <span>
          <span>已完成{checked}</span> / 全部{doList.length}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
