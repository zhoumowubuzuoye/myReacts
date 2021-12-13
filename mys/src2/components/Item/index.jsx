import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
import Lists from './components'
export default class Item extends Component {
  state = { List: [], isFirst: true, isErr: '', isLoading: false }
  componentDidMount() {
    this.token = PubSub.subscribe('getList', (_, data) => {
      this.setState(data)
    })
  }
  render() {
    const { List, isErr, isLoading, isFirst } = this.state
    return (
      <div className="row">
        {isFirst
          ? '请输入信息'
          : isLoading
          ? '请等待'
          : isErr
          ? isErr
          : List.map(item => {
              return <Lists key={item.id} {...item} />
            })}
      </div>
    )
  }
}
