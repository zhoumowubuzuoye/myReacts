import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  render() {
    const { delId, obj, chooseId } = this.props;
    return (
      <li>
        <label>
          <input
            type="checkbox"
            onChange={() => chooseId(obj.id)}
            checked={obj.checked}
          />
          <span>{obj.value}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: obj.checked ? "" : "none" }}
          onClick={() => delId(obj.id)}
        >
          删除
        </button>
      </li>
    );
  }
}
