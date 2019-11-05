import React, { Component } from 'react';
import * as api from '../../api'
import { Link } from "@reach/router";
import ErrorHandle from '../ErrorHandle';
import Loading from '../Loading';

class SingleArticle extends Component {
  ''
  state = {
    article: {},
    plusOne: 0,
    error: null,
    isLoading: true
  }
  render() {
    const {
      article, plusOne, error, isLoading
    } = this.state;

    if (error)
      return <ErrorHandle status={error.status} msg={error.msg} />;
    if (isLoading) return <Loading />
    return (
      <div>
        {article.length !== 0 ?
          (
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
          ) : (<ErrorHandle />)}
      </div>
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
    api.getSingleArticle(id).then(article => {
      this.setState({ article, error: null, isLoading: false })
    }
    ).catch((error) => {
      const { msg } = error.response.data;
      const { status } = error.response;
      this.setState({ error: { status, msg }, isLoading: false });
    });
  }

}

export default SingleArticle;