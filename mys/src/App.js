import React, { Component } from 'react'
import './App.less'
import store from './redux/store'
import {
  createAddNumberAction,
  createDelNumberAction,
} from './redux/count_action'
export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  chooseValue = () => {
    console.log(this.selectBox.value)
  }
  addNumber = () => {
    store.dispatch(createAddNumberAction(+this.selectBox.value))
  }
  delNumber = () => {
    store.dispatch(createDelNumberAction(+this.selectBox.value))
  }
  addNumberIsOdd = () => {
    const { sum } = this.state
    if (sum % 2 === 0) {
      let number = sum + +this.selectBox.value
      this.setState({
        sum: number,
      })
    }
  }
  render() {
    console.log(store.getState())
    return (
      <div>
        <h1>当前的求和为{store.getState()}</h1>
        <select
          name=""
          id=""
          onChange={this.chooseValue}
          ref={c => (this.selectBox = c)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.addNumber}>+</button>
        <button onClick={this.delNumber}>-</button>
        <button onClick={this.addNumberIsOdd}>当前求和为基数+</button>
        <button>异步+</button>
      </div>
    )
  }
}
