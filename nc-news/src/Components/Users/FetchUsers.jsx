import React, { Component } from 'react'
import * as api from '../../api'
import { Link } from "@reach/router";
import Loading from '../Loading'
class FetchUsers extends Component {
  state = { users: [], isLoading: true }
  render() {
    const { users, isLoading } = this.state
    if (isLoading) return <Loading />
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
  }

}

export default FetchUsers;