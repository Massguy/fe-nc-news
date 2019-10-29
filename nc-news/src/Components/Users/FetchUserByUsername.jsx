import React, { Component } from 'react'
import * as api from '../../api'
import ErrorHandle from '../ErrorHandle'
class FetchUserByUsername extends Component {
  state = { user: {}, error: null }
  render() {
    const { user, error } = this.state;
    if (error)
      return <ErrorHandle status={error.status} msg={error.msg} />;
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
      .catch((error) => {
        const { status } = error.response;
        const { msg } = error.response.data
        this.setState({ error: { status, msg } })
      });
  }

}

export default FetchUserByUsername;