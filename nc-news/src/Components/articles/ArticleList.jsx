import React, { Component } from 'react';
import ArticleCard from './ArticleCard'
import { Link } from "@reach/router";
import * as api from './../../api'
import SortBy from '../articles/SortBy'
import Loading from '../Loading'
class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: null,
    order: 'desc',
    author: null,
    isLoading: true
  }
  render() {
    const { articles, isLoading } = this.state
    if (isLoading) return <Loading />
    return (
      <section>
        <div className="articleHome">
          <SortBy updateSortby={this.updateSortby}
            updateOrder={this.updateOrder}
            updateAuthor={this.updateAuthor}
          />
          {articles.length !== 0 &&
            <main>
              <Link to='/users'><h2>Find All users</h2></Link>
              {articles.map(article =>

                <div className='articlecard' key={article.article_id}>
                  <Link to={`/articles/${article.article_id}`}>
                    <ArticleCard article={article} />
                  </Link>
                  <p>Comments:{article.comment_count}</p>
                  <p>author:{article.author}</p>
                  <p>Created:{article.created_at.slice(0, 10)}</p>
                  <p>vote:{article.votes}</p>
                </div>)}
            </main>
          }
        </div>
      </section>
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
    api.getAllArticles({ slug: this.props.slug, sort_by, order, author }).then(({ data }) => {
      console.log(data)
      this.setState({ articles: data.articles, isLoading: false });
    })
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
        console.log(data)
        this.setState({ articles: data.articles })
      }).catch(console.log)
    }
  }
}

export default ArticleList;
