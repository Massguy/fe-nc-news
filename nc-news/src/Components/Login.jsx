import React, { Component } from 'react'
import * as api from '../api'

class Login extends Component {
  state = {}
  render() {
    return ();
  }

  componentDidMount() {
    api.getUsers().then(({ data }) => {
      this.setState(data)
    });
  }
}

export default Login;