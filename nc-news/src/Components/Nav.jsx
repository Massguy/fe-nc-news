import React, { Component } from 'react';
import '../App.css'
import { Link } from "@reach/router";

class Nav extends Component {
  render() {
    const { username } = this.props
    return (
      <nav className='navBar'>
        <Link to='/'> <button className='homeButton'>Home</button></Link>
        <Link to='/topics/cooking'><button className='cookingButton' onClick={this.cooking}>Cooking</button></Link>
        <Link to='/topics/football'><button className='footballButton'>Football</button></Link>
        <Link to='/topics/coding'><button className='codingButton'>Coding</button></Link>
        <p>logged in as {username} </p>
      </nav >

    );
  }
}


export default Nav;
