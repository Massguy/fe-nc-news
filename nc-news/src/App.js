import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ArticleList from './Components/articles/ArticleList';
import * as api from './api'
import SingleArticle from './Components/articles/SingleArticle'
import GetTopics from './Components/topics/GetTopics'
import { Router } from "@reach/router"
import CommentByArticle from './Components/comments/CommentByArticle'
import FetchUsers from './Components/Users/FetchUsers'
import Error404 from './Components/Error404';
import FetchUserByUsername from './Components/Users/FetchUserByUsername';

class App extends Component {
  state = {
    username: 'jessjelly'
  }

  updateUser = (event) => {
    const username = event.target.value
    this.setState({ username })
  }
  render() {
    const { username } = this.state


    return (
      <div className="App">
        <Header />
        <Nav username={username} />
        <form>Username:
          <select onChange={this.updateUser}>
            <option value='weegembump'>weegembump </option>
            <option value='grumpy19'>grumpy19 </option>
            <option value='happyamy2016'>happyamy2016 </option>
            <option value='jessjelly'>jessjelly </option>
            <option value='tickle122'>tickle122 </option>
            <option value='cooljmessy'>cooljmessy </option>
          </select>
        </form>
        <Router>
          <ArticleList path='/' username={username} />
          <ArticleList path='/articles' />
          <ArticleList path='/topics/:slug' />
          <FetchUsers path='/users' />
          <FetchUserByUsername path='/users/:username' />
          <SingleArticle path='/articles/:id' />
          <GetTopics path='/topics' />
          <CommentByArticle path='/articles/:id/comments' username={username} />
          <Error404 default />
        </Router>
      </div>
    );
  }

}


export default App;
