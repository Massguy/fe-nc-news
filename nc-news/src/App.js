import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ArticleList from './Components/articles/ArticleList';
import SingleArticle from './Components/articles/SingleArticle'
import GetTopics from './Components/topics/GetTopics'

import { Router } from "@reach/router"
import CommentByArticle from './Components/comments/CommentByArticle'
class App extends Component {
  state = {
    username: '',
    loggedin: false
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <form>Login:
        <select>
            <option value='grumpy19'>grumpy19</option>
          </select>
          <button>Login</button>
        </form>
        <Router>
          <ArticleList path='/' />
          <ArticleList path='/articles' />
          <ArticleList path='/topics/:slug' />
          <SingleArticle path='/articles/:id' />
          <GetTopics path='/topics' />
          <CommentByArticle path='/articles/:id/comments' />
        </Router>
      </div>
    );
  }
  handleSubmit = (event) => {
    event.preventDefault()

  }


}


export default App;
