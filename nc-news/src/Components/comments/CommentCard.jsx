import React, { Component } from 'react'
import * as api from '../../api'
class CommentCard extends Component {
  state = {
    plusOne: 0
  }
  render() {
    const {
      plusOne
    } = this.state;
    const { comment } = this.props
    return (

      <div className='commentbox'>
        <p>id:{comment.comment_id}</p>
        <h5>User:{comment.author}</h5>
        <p>{comment.body}</p>
        <p>Date Posted:{comment.created_at.slice(0, 10)}</p>
        <p>Votes:{comment.votes + plusOne}</p>
        <button disabled={plusOne === 1} onClick={() => this.updateVote(1)}>Good</button>
        <button disabled={plusOne === -1} onClick={() => this.updateVote(-1)}>Bad</button>
      </div>
    );
  }
  updateVote = value => {
    api.updateCommentVote(value, this.props.comment.comment_id)
    this.setState(prevState => {
      return { plusOne: prevState.plusOne + value }
    })
  }
}

export default CommentCard;