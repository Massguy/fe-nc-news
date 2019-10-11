import React, { Component } from 'react'
import * as api from '../../api'
class CommentBox extends Component {
  state = { author: null, body: "" }
  render() {
    return (<form>
      <textarea onchange={this.handleChange}></textarea>
      <button type='submit' onClick={this.postedComment}>submit</button>
    </form>);
  }
  handleChange = (event) => {
    const typedComment = event.target.value
    this.setState({ body: typedComment })
  }

  postedComment = (event) => {
    event.preventDefault()

  }

}

export default CommentBox;