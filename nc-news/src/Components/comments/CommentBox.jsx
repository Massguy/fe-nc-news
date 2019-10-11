import React, { Component } from 'react'
import * as api from '../../api'
class CommentBox extends Component {
  state = { author: null, body: "" }
  render() {
    return (<form>
      <textarea onchange={this.handleChange}></textarea>
      <button type='submit' onClick={this.handleSubmit}>submit</button>
    </form>);
  }
  handleChange = (event) => {
    const typedComment = event.target.value
    this.setState({ body: typedComment })
  }

  handleSubmit = (event) => {
    const { postedComment } = this.props.article_id
    event.preventDefault()
    const user = {
      author: this.state.author,
      body: this.state.body
    };
    api.postComment(user)
  }

}

export default CommentBox;