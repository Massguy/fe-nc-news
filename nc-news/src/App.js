import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ArticleList from './Components/articles/ArticleList';
import SingleArticle from './Components/articles/SingleArticle'
import { Router } from "@reach/router"


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <ArticleList path='/' />
        <ArticleList path='/articles' />
        <SingleArticle path='/articles/:id' />
      </Router>
    </div>
  );
}

export default App;
