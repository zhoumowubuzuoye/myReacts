import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Children from '../../page/Children'
import Children1 from '../../page/Children1'
export default class index extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Switch>
          <Route path="/home/children" component={Children} />
          <Route path="/home/children1" component={Children1} />
          <Redirect to="/home/children1" />
        </Switch>
      </div>
    )
  }
}
