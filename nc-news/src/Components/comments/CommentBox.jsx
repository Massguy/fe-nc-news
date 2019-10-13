import React, { Component } from 'react'
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
    const { addComment, id } = this.props;
    addComment(id, this.state);
    this.setState({ body: "" });
  };
}
export default CommentBox;