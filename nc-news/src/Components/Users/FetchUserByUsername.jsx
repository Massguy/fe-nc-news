import React, { Component } from 'react'
import * as api from '../../api'
class FetchUserByUsername extends Component {
  state = { user: {} }
  render() {
    const { user } = this.state;
    return (
      <div>
        <h1>Name:{user.name}</h1>
        <img src={user.avatar_url} alt="Avatar" />
        <h3>Username: {user.username}</h3>
      </div>
    );
  }
  componentDidMount() {
    const { username } = this.props
    api.getUserByUsername(username)
      .then(user => this.setState({ user }))
  }
}

export default FetchUserByUsername;