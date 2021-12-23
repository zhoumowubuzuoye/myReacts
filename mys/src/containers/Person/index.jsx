import React, { Component } from "react";
import { connect } from "react-redux";
import { addPersonAction } from "../../redux/actions/person";
class Person extends Component {
  add = () => {
    const name = this.name.value;
    const age = this.age.value;
    this.age.value = "";
    this.name.value = "";
    this.props.addPerson({ name, age });
  };
  render() {
    const person = this.props.person;
    return (
      <div>
        <input
          type="text"
          placeholder="请输入姓名"
          ref={(c) => (this.name = c)}
        />
        <input
          type="text"
          placeholder="请输入年龄"
          ref={(c) => (this.age = c)}
        />
        <button onClick={this.add}>添加</button>
        <ul>
          {person.map((item, index) => {
            return (
              <li key={index}>
                {item.name}---{item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ person: state.personResucer }), {
  addPerson: addPersonAction,
})(Person);
