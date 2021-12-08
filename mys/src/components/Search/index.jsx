import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class Search extends Component {
  search = () => {
    PubSub.publish('getList', { isFirst: false, isLoading: true })
    const {
      input: { value },
    } = this
    axios.get(`http://localhost:3000/api/search/users?q=${value}`).then(
      res => {
        PubSub.publish('getList', { List: res.data.items, isLoading: false })
      },
      err => {
        console.log(err)
        PubSub.publish('getList', { isLoading: false, isErr: err.message })
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            ref={c => (this.input = c)}
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
