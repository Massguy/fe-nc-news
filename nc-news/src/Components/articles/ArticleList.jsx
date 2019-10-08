import React, { Component } from 'react';
import ArticleCard from './ArticleCard'

import { Router, Link } from "@reach/router";

import * as api from './../../api'
import SingleArticle from './SingleArticle';
class ArticleList extends Component {
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
          {articles.map(article => <div key={article.article_id}>
            <Link to={`/articles/${article._id}`}>
              <ArticleCard article={article} />
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

export default ArticleList;
