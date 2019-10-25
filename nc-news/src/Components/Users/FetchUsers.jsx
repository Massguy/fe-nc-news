import React, { Component } from 'react'
import * as api from '../../api'
import { Link } from "@reach/router";
class FetchUsers extends Component {
  state = { users: [] }
  render() {
    const { users } = this.state
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
      console.log(data.users)
      this.setState({ users: data.users })
    })
  }

}

export default FetchUsers;