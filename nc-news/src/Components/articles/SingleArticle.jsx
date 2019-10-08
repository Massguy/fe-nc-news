import React, { Component } from 'react';
import * as api from '../../api'

class SingleArticle extends Component {
  state = {
    article: {}
  }
  // patchVotes = () => {
  //   api.patchVote((this.props.article_id, { "inc_votes": 1 })
  //     .then(data)
  //   )
  // }
  render() {
    console.log(this.state)
    const {
      article
    } = this.state;
    return (
      <>
        <h1>{article.title}</h1>
        <h4>Author:{article.author}</h4>
        <h5>Time:{article.created_at}</h5>
        <p>{article.body}</p>
        <p2>votes:{article.votes}</p2>
        <button>vote</button>
      </>
    );
  }
  componentDidMount() {
    const { id } = this.props
    api.getSingleArticle(id).then(article => this.setState(() => {
      return { article }
    }))
  }
}

export default SingleArticle;