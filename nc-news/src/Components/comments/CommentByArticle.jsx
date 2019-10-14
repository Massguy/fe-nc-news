
import React, { Component } from 'react'
import CommentCard from './CommentCard'
import '../../App.css'
import * as api from '../../api'
import CommentBox from './CommentBox';
class ArticleByCommentid extends Component {
  state = { comments: [] }
  render() {
    const { username, id } = this.props
    const { comments } = this.state
    return (<div>
      <CommentBox addComment={this.addComment} username={username} id={id} />
      {comments.map(comment => <div key=
        {comment.comment_id}>
        <CommentCard comment={comment} username={username} />
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
  addComment = (id, body) => {
    api.postComment(id, body).then(newComment => {
      console.log(newComment, "<----")
      this.setState(previousState => {
        const existingComments =
          previousState.comments.map(comment => {
            const copyComment = { ...comment };
            return copyComment;

          });
        return { comments: [...existingComments, newComment] };

      });
    });
  };


}
export default ArticleByCommentid;