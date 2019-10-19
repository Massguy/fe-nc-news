import React, { Component } from 'react';
import * as api from '../../api'
import { Link } from "@reach/router";
import { navigate } from '@reach/router/lib/history';
import Error404 from '../Error404'

class SingleArticle extends Component {
  ''
  state = {
    article: {},
    plusOne: 0,
    error: null
  }
  render() {
    const {
      article, plusOne, error
    } = this.state;

    if (article === undefined) {
      return <Error404 {...error} />;
    }
    return (
      <div className='singleArticle'>
        <h1>{article.title}</h1>
        <h4>Author:{article.author}</h4>
        <p className='articleBody'>{article.body}</p>
        <p>votes:{article.votes + plusOne}</p>
        <button disabled={plusOne === 1} onClick={() => this.updateVote(1)}>Good</button>
        <button disabled={plusOne === -1} onClick={() => this.updateVote(-1)}>Bad</button>
        <Link to={`/articles/${article.article_id}/comments`}>
          <h4>Show Comments</h4>
        </Link>

      </div >
    );
  }
  updateVote = value => {

    api.updateArticleVote(value, this.state.article.article_id)
    this.setState(prevState => {
      return { plusOne: prevState.plusOne + value }
    })
  }
  componentDidMount() {
    const { id } = this.props
    api.getSingleArticle(id).then(article => this.setState({ article, error: null })
    ).catch((error) => {
      const { msg } = error.response.data;
      const { status } = error.response;
      this.setState({ error: { status, msg } });
    });
  }
  navigateArticles = () => {
    navigate('/')
  }

}

export default SingleArticle;