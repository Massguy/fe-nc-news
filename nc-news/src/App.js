import React, { Component } from "react";
import "./App.css";

import { Router } from "@reach/router"
import ArticleList from "./Components/articles/ArticleList";
import SingleArticle from "./Components/articles/SingleArticle";
import GetTopics from "./Components/topics/GetTopics";

import CommentByArticle from "./Components/comments/CommentByArticle";
import FetchUsers from "./Components/Users/FetchUsers";
import FetchUserByUsername from "./Components/Users/FetchUserByUsername";
import EndpointError from "./Components/EndPointError";
import Navbar from "./Components/Navbar";

class App extends Component {
  state = {
    username: "jessjelly",
  };

  updateUser = (event) => {
    const username = event.target.value;
    this.setState({ username });
  };
  render() {
    const { username } = this.state;

    return (
      <div className="App">
       <Navbar />
       <Router>
       
          <ArticleList path='/' username={username} />
          <ArticleList path='/articles' />
          <ArticleList path='/topics/:slug' />
          <FetchUsers path='/users' />
          <FetchUserByUsername path='/users/:username' />
          <SingleArticle path='/articles/:id' />
          <GetTopics path='/topics' />
          <CommentByArticle path='/articles/:id/comments' username={username} />
          <EndpointError default />
        </Router>
      </div>
    );
  }
}

export default App;
