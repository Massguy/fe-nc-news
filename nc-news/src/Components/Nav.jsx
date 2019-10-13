import React, { Component } from 'react';

import { Link } from "@reach/router";

class Nav extends Component {
  render() {
    const { username } = this.props
    return (
      <nav>
        <Link to='/'> <button>Home</button></Link>
        <Link to='/topics/cooking'><button>Cooking</button></Link>
        <Link to='/topics/football'><button>Football</button></Link>
        <Link to='/topics/coding'><button>Coding</button></Link>
        <p>logged in as {username} </p>
      </nav>
    );;
  }
}


export default Nav;
