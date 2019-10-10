import React, { Component } from 'react';
import ArticleCard from './ArticleCard'
import { Link } from "@reach/router";
import * as api from './../../api'
import SortBy from '../articles/SortBy'
class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: null,
    order: 'desc'
  }
  render() {
    const { articles } = this.state
    return (
      <div>
        <div>
          <SortBy updateSortby={this.updateSortby}
            updateOrder={this.updateOrder}
          />
          {articles.map(article => <div key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <ArticleCard article={article} />
            </Link>

            <p>Comments:{article.comment_count}</p>
            <p>Created:{article.created_at.slice(0, 10)}</p>
            <p>vote:{article.votes}</p>
          </div>)}
        </div>
      </div>
    );
  }

  updateSortby = (event) => {
    const sort_by = event.target.value
    this.setState({ sort_by })

  }

  updateOrder = (event) => {
    const order = event.target.value
    this.setState({ order })
  }
  componentDidMount() {
    const { sort_by, order } = this.state
    api.getAllArticles({ slug: this.props.slug, sort_by, order }).then(({ data }) => {
      this.setState(data);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { slug } = this.props
    const { sort_by, order } = this.state
    const topicChange = (prevProps.slug !== slug)
    const changeBySort = (prevState.sort_by !== sort_by)
    const changeOrder = (prevState.order !== order)
    if (changeBySort || topicChange || changeOrder) {
      api.getAllArticles({ slug, sort_by, order }).then(({ data }) => {
        this.setState(data)
      })
    }
  }


}

export default ArticleList;
