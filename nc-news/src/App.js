import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ArticleList from './Components/articles/ArticleList';
import SingleArticle from './Components/articles/SingleArticle'
import GetTopics from './Components/topics/GetTopics'
import { Router } from "@reach/router"
import CommentByArticle from './Components/comments/CommentByArticle'
import Error404 from './Components/Error404';
class App extends Component {
  state = {
    username: null,
    loggedin: false
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        {!this.state.loggedin ? <label>
          username  <input
            onChange={this.usernameChange}
            type='text'
          />
          <button
            type='submit'
            value='logIn'
            onClick={this.LoggedIn}
          >
            Login
              </button>
        </label> : <span id='loggedIn'>
            <p id='loggedInUser'>{`logged in as ${this.state.username}`}</p>

            <button
              onClick={this.LoggedOut}
              className='button'
              id='logOutButton'
            >
              Log Out
              </button>
            {this.state.loggedIn}
          </span>
        }
        <Router>
          <ArticleList path='/' />
          <ArticleList path='/articles' />
          <ArticleList path='/topics/:slug' />
          <SingleArticle path='/articles/:id' />
          <GetTopics path='/topics' />
          <CommentByArticle path='/articles/:id/comments' />
          <Error404 default />
        </Router>
      </div>
    );
  }

}


export default App;
