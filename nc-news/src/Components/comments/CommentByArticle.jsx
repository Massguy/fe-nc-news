import React, { Component } from 'react'
import CommentCard from './CommentCard'
import '../../App.css'
import * as api from '../../api'
class ArticleByCommentid extends Component {
  state = { comments: [] }
  render() {
    const { comments } = this.state
    return (<div>
      {comments.map(comment => <div key={comment.comment_id}>
        <CommentCard comment={comment} />
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
}

export default ArticleByCommentid;