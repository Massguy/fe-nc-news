import React, { Component } from 'react';
import * as api from '../../api'
import { Link } from "@reach/router";

class SingleArticle extends Component {
  ''
  state = {
    article: {},
    plusOne: 0
  }
  render() {
    const {
      article, plusOne
    } = this.state;
    return (
      <>

        <h1>{article.title}</h1>
        <h4>Author:{article.author}</h4>
        <h5>Time:{article.created_at}</h5>
        <p>{article.body}</p>
        <p>votes:{article.votes + plusOne}</p>
        <button disabled={plusOne === 1} onClick={() => this.updateVote(1)}>Good</button>
        <button disabled={plusOne === -1} onClick={() => this.updateVote(-1)}>Bad</button>
        <Link to={`/articles/${article.article_id}/comments`}>
          <h4>Show Comments</h4>
        </Link>

      </>
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
    api.getSingleArticle(id).then(article => this.setState(() => {
      return { article }
    }))
  }


}

export default SingleArticle;