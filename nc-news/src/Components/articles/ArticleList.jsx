import React, { Component } from 'react';
import ArticleCard from './ArticleCard'
import { Link } from "@reach/router";
import * as api from './../../api'
import SortBy from '../articles/SortBy'
class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: null
  }
  render() {
    const { articles } = this.state
    return (
      <div>
        <div>
          <SortBy updateSortby={this.updateSortby} />
          {articles.map(article => <div key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <ArticleCard article={article} />
            </Link>


          </div>)}
        </div>
      </div>
    );
  }

  updateSortby = (sort_by) => {
    this.setState({ sort_by })
  }
  componentDidMount() {
    api.getAllArticles({ slug: this.props.slug }).then(({ data }) => {
      this.setState(data);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { slug } = this.props
    const { sort_by } = this.state
    const topicChange = (prevProps.slug !== slug)
    const changeBySort = (prevState.sort_by !== sort_by)
    if (topicChange || changeBySort) {
      api.getAllArticles({ slug, sort_by }).then(({ data }) => {
        this.setState(data)
      })
    }
  }
}

export default ArticleList;
