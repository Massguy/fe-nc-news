import React, { Component } from 'react'
import * as api from '../../api'
class CommentBox extends Component {
  state = { username: "", body: "" }
  render() {
    const { username } = this.props;
    return (<form onSubmit={this.handleSubmit}>
      <label>Have a say {username}
        <textarea onChange={this.handleChange} ></textarea>
      </label>
      <button type='submit'>submit</button>
    </form>);
  }
  handleChange = event => {
    const body = event.target.value;
    const { username } = this.props;
    this.setState({ username, body });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { id } = this.props;
    console.log(id)
    console.log(this.state.body)
    api.postComment(id, this.state).then(newComment => {
      this.props.updateComments(newComment)
    })

  };
}
export default CommentBox;