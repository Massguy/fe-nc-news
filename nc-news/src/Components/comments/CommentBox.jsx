import React, { Component } from 'react'
import * as api from '../../api'
import './CommentSection.css'
class CommentBox extends Component {
  state = { username: "", body: "" }
  render() {
    const { username } = this.props;
    return (<form onSubmit={this.handleSubmit}>
      <div className="commentBox">
      <label>Have a say {username}</label>
        <textarea onChange={this.handleChange} required placeholder="Have a say" cols="35" rows="5" style={{backgroundColor:'#fcfcfc'}}></textarea>
      
      </div>
      <div className="CommentButtonContainer">
      <button type='submit' className='commentCardButton' style={{backgroundColor:"darkgoldenrod"}}>submit</button>
      </div>
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
    api.postComment(id, this.state).then(newComment => {
      this.props.updateComments(newComment)
    })

  };
}
export default CommentBox;