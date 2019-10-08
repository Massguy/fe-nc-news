import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ArticleList from './Components/articles/ArticleList';
import { Router } from "@reach/router"
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Homepage path='/' />
        <ArticleList path='/articles' />
      </Router>
    </div>
  );
}

export default App;
