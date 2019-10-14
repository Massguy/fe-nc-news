import React, { Component } from 'react';
import ArticleCard from './ArticleCard'
import { Link } from "@reach/router";
import * as api from './../../api'
import SortBy from '../articles/SortBy'
class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: null,
    order: 'desc',
    author: null
  }
  render() {
    const { articles } = this.state
    return (
      <div>
        <div>
          <SortBy updateSortby={this.updateSortby}
            updateOrder={this.updateOrder}
            updateAuthor={this.updateAuthor}
          />
          {articles.map(article =>
            <div key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <ArticleCard article={article} />
              </Link>
              <p>Comments:{article.comment_count}</p>
              <p>author:{article.author}</p>
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
  updateAuthor = (event) => {
    const author = event.target.value
    if (author === 'none') {
      this.setState({ author: null })
    }
    else {
      this.setState({ author })
    }
  }

  componentDidMount() {
    const { sort_by, order, author } = this.state
    console.log(this.props.slug, 'didMount')
    api.getAllArticles({ slug: this.props.slug, sort_by, order, author }).then(({ data }) => {
      this.setState(data);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { slug } = this.props
    const { sort_by, order, author } = this.state
    const topicChange = (prevProps.slug !== slug)
    const changeBySort = (prevState.sort_by !== sort_by)
    const changeOrder = (prevState.order !== order)
    const byAuthor = (prevState.author !== author)
    if (changeBySort || topicChange || changeOrder || byAuthor) {
      api.getAllArticles({ slug, sort_by, order, author }).then(({ data }) => {
        this.setState(data)
      }).catch(console.log)
    }
  }
}

export default ArticleList;
