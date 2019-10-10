import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ArticleList from './Components/articles/ArticleList';
import SingleArticle from './Components/articles/SingleArticle'
import GetTopics from './Components/topics/GetTopics'

import { Router } from "@reach/router"
import ArticleByCommentid from './Components/comments/ArticleByCommentid';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <ArticleList path='/' />
        <ArticleList path='/articles' />
        <ArticleList path='/topics/:slug' />
        <SingleArticle path='/articles/:id' />
        <GetTopics path='/topics' />
        {/* <GetTopics path='/articles/topics' /> */}
        <ArticleByCommentid path='/articles/:id/comments' />
      </Router>
    </div>
  );
}

export default App;
