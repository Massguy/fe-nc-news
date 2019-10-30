
import React, { Component } from 'react'
import CommentCard from './CommentCard'
import '../../App.css'
import * as api from '../../api'
import CommentBox from './CommentBox';
import ErrorHandle from '../ErrorHandle';
import Loading from '../Loading'
class ArticleByCommentid extends Component {
  state = { comments: [], error: null, isLoading: false }
  render() {
    const { username, id } = this.props
    const { comments, error, isLoading } = this.state
    if (isLoading) return <Loading />
    if (error) return <ErrorHandle status={error.status} msg={error.msg} />
    return (<div>
      <CommentBox updateComments={this.updateComments} username={username} id={id} />

      {comments.map(comment => <div key=
        {comment.comment_id}>
        <CommentCard comment={comment} username={username} deleteComments={this.deleteComments} id={id} />

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

    ).catch((error) => {
      const { status } = error.response;
      const { msg } = error.response.data
      this.setState({ error: { status, msg }, isLoading: true })
    })
  }
  updateComments = (newComment) => {
    if (!newComment.length === 0)
      this.setState(prevState => {
        return { comments: [newComment, ...prevState.comments] }
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