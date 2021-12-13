import React, { Component } from 'react'
import './App.css'
import Item from './components/Item'
import Search from './components/Search'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <Item />
      </div>
    )
  }
}
