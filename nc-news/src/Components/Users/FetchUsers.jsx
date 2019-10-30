import React, { Component } from 'react'
import * as api from '../../api'
import { Link } from "@reach/router";
import Loading from '../Loading'
import ErrorHandle from '../ErrorHandle';
class FetchUsers extends Component {
  state = { users: [], isLoading: true, error: null }
  render() {
    const { users, isLoading, error } = this.state
    if (isLoading) return <Loading />
    if (error) return <ErrorHandle status={error.status} msg={error.msg} />
    return (<div>
      {users.map((user) =>
        <div>
          <Link to={`/users/${user.username}`}>
            <h1 key={user.name}>{user.name}</h1>
          </Link>
        </div>)}
    </div>);
  }
  componentDidMount() {
    api.getUsers().then(({ data }) => {
      this.setState({ users: data.users, isLoading: false })
    })
      .catch((error) => {
        const { status } = error.response;
        const { msg } = error.response.data
        this.setState({ error: { status, msg }, isLoading: false })
      })
  }

}

export default FetchUsers;