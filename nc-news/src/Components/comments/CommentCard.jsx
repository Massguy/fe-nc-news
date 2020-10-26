import React, { Component } from 'react'
import * as api from '../../api'
import './CommentSection.css'
class CommentCard extends Component {
  state = {
    plusOne: 0
  }
  render() {
    const {
      plusOne
    } = this.state;
    const { comment, username } = this.props
    return (
      <div className="commentBoxContainer">
      <div className='commentbox'>
        <p>id:{comment.comment_id}</p>
        <h5>User:{comment.author}</h5>
        <p>{comment.body}</p>
        <p>Date Posted:{comment.created_at.slice(0, 10)}</p>
        <p>Votes:{comment.votes + plusOne}</p>
        <div className="commentCardButton">
        <button disabled={plusOne === 1} onClick={() => this.updateVote(1)} style={{width:'50px',height:'50px'}}><i className="fas fa-thumbs-up"></i> </button>
        </div>
        <div className="commentCardButton">
        <button disabled={plusOne === -1} onClick={() => this.updateVote(-1)} style={{width:'50px',height:'50px'}}><i className="fas fa-thumbs-down"></i> </button>
        {username === comment.author && (<button onClick={this.handleDelete} style={{width:'50px',height:'50px'}}> <i className="fas fa-trash-alt"></i></button>)}
        </div>
      </div>
      </div>
    );
  }
  updateVote = value => {
    const { comment, id } = this.props
    api.updateCommentVote(value, comment.comment_id, id)
    this.setState(prevState => {
      return { plusOne: prevState.plusOne + value }
    })
  }

  handleDelete = () => {
    const {
      comment: { comment_id },
      deleteComments
    } = this.props
    deleteComments(comment_id)
  }
}

export default CommentCard;