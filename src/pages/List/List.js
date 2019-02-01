import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <div className="page-box">
        {this.state.users.map((user, i) => {
          return (
            <div key={i}>
              <div>姓名：{user.username}</div>
              <div>年龄：{user.age}</div>
              <div>性别：{user.gender}</div>
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      users: [
        { username: 'Jerry', age: 21, gender: 'male' },
        { username: 'Tomy', age: 22, gender: 'male' },
        { username: 'Lily', age: 19, gender: 'female' },
        { username: 'Lucy', age: 20, gender: 'female' }
      ]
    }
  }
  componentDidMount() {
  }
}