import React, { Component } from "react";
import Item from "../Item/index";
import "./index.css";
export default class List extends Component {
  render() {
    const { delId, chooseId } = this.props;
    return (
      <ul className="todo-main">
        {this.props.doList.map((item) => {
          return (
            <Item key={item.id} obj={item} chooseId={chooseId} delId={delId} />
          );
        })}
      </ul>
    );
  }
}
