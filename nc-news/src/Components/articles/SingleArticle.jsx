import React, { Component } from 'react';
import * as api from '../../api'
import { Link } from "@reach/router";
import ErrorHandle from '../ErrorHandle';
import Loading from '../Loading';
import './SingleArticle.css'

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
              <div className="articleTitle">
              <h1>{article.title}</h1>
              </div>
              <div className="articleUser">
              <h4>Author:{article.author}</h4>
              </div>
              <div className="SingleArticleContainer">
              <p className='articleBody'>{article.body}</p>
              </div>
              <div className="votesContainer">
              <p>votes:{article.votes + plusOne}</p>
              <button disabled={plusOne === 1} onClick={() => this.updateVote(1)} className="thumbsUpButton"><i className="fas fa-thumbs-up"></i></button>
              <button disabled={plusOne === -1} onClick={() => this.updateVote(-1)} className="thumbsDownVote"><i className="fas fa-thumbs-down"></i></button>
              </div>
              <Link to={`/articles/${article.article_id}/comments`} style={{ textDecoration: 'none',textAlign:"center",fontSize:'23px'}}>
                <h4 className="showComments"><i className="fas fa-comments"> </i> Show Comments</h4>
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