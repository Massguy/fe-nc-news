import React, { Component } from 'react'
import * as api from '../../api'
class ArticleByCommentid extends Component {
  state = { comments: [] }
  render() {
    const { comments } = this.state
    return (<div>
      {comments.map(comment => <div key={comment.comment_id}> <h3>
        Author:{comment.author}
      </h3>
        <h4>Message:{comment.body}</h4>
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