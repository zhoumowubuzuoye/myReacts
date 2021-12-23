import React, { Component } from "react";
export default class Counts extends Component {
  chooseValue = () => {
  };
  addNumber = () => {
    this.props.add(+this.selectBox.value);
  };
  delNumber = () => {
    this.props.del(+this.selectBox.value);
  };
  addNumberIsOdd = () => {
    if (this.props.count % 2 === 0) {
      this.props.add(+this.selectBox.value);
    }
  };
  actionAddNumber = () => {
    this.props.action(+this.selectBox.value, 500);
  };
  render() {
    return (
      <div>
        <div>
          <h1> 当前的求和为 {this.props.count} </h1>{" "}
          <select
            name=""
            id=""
            onChange={this.chooseValue}
            ref={(c) => (this.selectBox = c)}
          >
            <option value="1"> 1 </option> <option value="2"> 2 </option>{" "}
            <option value="3"> 3 </option>{" "}
          </select>{" "}
          <button onClick={this.addNumber}> + </button>{" "}
          <button onClick={this.delNumber}> - </button>{" "}
          <button onClick={this.addNumberIsOdd}> 当前求和为基数 + </button>{" "}
          <button onClick={this.actionAddNumber}> 异步 + </button>{" "}
        </div>
      </div>
    );
  }
}
