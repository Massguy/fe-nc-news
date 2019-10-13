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
    username: 'grumpy19'
  }
  render() {
    const { username } = this.state
    return (
      <div className="App">
        <Header />
        <Nav username={username} />
        <Router>
          <ArticleList path='/' />
          <ArticleList path='/articles' />
          <ArticleList path='/topics/:slug' />
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
