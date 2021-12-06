import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";
export default class App extends Component {
  state = {
    doString: "",
    doList: [
      {
        value: "xxxx",
        id: 1,
        checked: false,
      },
    ],
    allChecked: false,
  };
  setDoString = (value) => {
    console.log(value);
    this.setState({
      doString: value,
    });
  };
  addDo = () => {
    let doList = this.state.doList;
    doList = [
      {
        id: this.state.doList.length + 1,
        value: this.state.doString,
        checked: false,
      },
      ...this.state.doList,
    ];
    this.setState({ doString: "", doList: doList, allChecked: false });
  };
  chooseId = (id) => {
    let doList = this.state.doList;
    doList.map((item) => {
      if (item.id === id) {
        item.checked = item.checked ? true : false;
      }
      return item;
    });
    let allChecked = doList.some((item) => {
      return !(item.checked === "none");
    });
    console.log(allChecked);
    this.setState({
      doList: doList,
      allChecked,
    });
  };
  delId = (id) => {
    let doList = this.state.doList;
    doList = doList.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      doList,
    });
  };
  allCheckedButton = (checked) => {
    let { doList } = this.state;
    doList = doList.map((item) => {
      item.checked = checked ? "" : "none";
      return item;
    });
    console.log(doList);
    this.setState({ allChecked: checked, doList });
  };
  render() {
    const { doString, doList, allChecked } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header
            doString={doString}
            setDoString={this.setDoString}
            addDo={this.addDo}
          />
          <List doList={doList} chooseId={this.chooseId} delId={this.delId} />
          <Footer
            doList={doList}
            allChecked={allChecked}
            allCheckedButton={this.allCheckedButton}
          />
        </div>
      </div>
    );
  }
}
