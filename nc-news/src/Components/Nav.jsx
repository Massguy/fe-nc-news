import React, { Component } from 'react';

import { Link } from "@reach/router";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to='/'> <button>Home</button></Link>
        <Link to='/topics/cooking'><button>Cooking</button></Link>
        <Link to='/topics/football'><button>Football</button></Link>
        <Link to='/topics/coding'><button>Coding</button></Link>
      </nav>
    );;
  }
}


export default Nav;
