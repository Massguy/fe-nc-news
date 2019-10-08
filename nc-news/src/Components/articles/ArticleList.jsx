import React, { Component } from 'react';
import ArticleCard from './ArticleCard'
import { Link } from "@reach/router";
import * as api from './../../api'
class ArticleList extends Component {
  state = {
    articles: []
  }
  render() {
    const { articles } = this.state
    return (

      <div>
        {articles.map(article => <div key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <ArticleCard article={article} />
          </Link>
        </div>)}
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
