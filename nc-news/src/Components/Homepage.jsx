import React, { Component } from 'react';

import * as api from '../api'
import { Router, Link } from "@reach/router";
import SingleArticle from './articles/SingleArticle'
import HomeArticleCard from './articles/HomeArticleCard'

class Homepage extends Component {
  state = {
    articles: []
  }
  render() {
    const { articles } = this.state
    return (
      <div>
        <Router>
          <SingleArticle path='/:id' />
        </Router>
        <div>
          <h1>Welcome to the worlds best news Provider</h1>
          {articles.map(article => <div key={article.article_id}>
            <Link to={`/articles/${article._id}`}>
              <HomeArticleCard article={article} />
            </Link>
          </div>)}
        </div>
      </div>

    );
  }
  componentDidMount() {
    api.getAllArticles().then(({ data }) => {
      this.setState(data);
    });
  }
}


export default Homepage;