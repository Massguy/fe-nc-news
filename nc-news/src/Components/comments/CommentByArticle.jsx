
import React, { Component } from 'react'
import CommentCard from './CommentCard'
import '../../App.css'
import * as api from '../../api'
import CommentBox from './CommentBox';
class ArticleByCommentid extends Component {
  state = { comments: [] }
  render() {
    const { username, id } = this.props
    console.log(id)
    const { comments } = this.state
    return (<div>
      <CommentBox updateComments={this.updateComments} username={username} id={id} />

      {comments.map(comment => <div key=
        {comment.comment_id}>
        <CommentCard comment={comment} username={username} deleteComments={this.deleteComments} />
      </div>
      )}
    </div>);
  }
  componentDidMount() {
    const { id } = this.props
    api.getCommentByArticleid(id).then(comments =>
      this.setState(() => {
        return { comments }
      })
    )
  }
  updateComments = (newComment) => {
    this.setState(prevState => {
      return { comments: [...prevState.comments, newComment] }
    })
  }

  deleteComments = comment_id => {
    api.deleteComment(comment_id).then(() => {
      this.setState(({ comments }) => {
        const copyComments = [...comments]
        const filterstate = copyComments.filter(comment => {
          return comment.comment_id !== comment_id
        })
        return { comments: filterstate }
      })
    })
  }

}
export default ArticleByCommentid;