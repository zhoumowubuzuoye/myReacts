import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <Link className="list-group-item" to="/about/about">
                About
              </Link>
              <Link className="list-group-item" to="/home/home">
                Home
              </Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about/:name" component={About} />
                  <Route path="/home/:name" component={Home} />
                  <Redirect to="/home/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
