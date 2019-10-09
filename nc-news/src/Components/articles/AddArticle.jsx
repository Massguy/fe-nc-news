import React, { Component } from 'react'
import * as api from '../../api'
class AddArticle extends Component {
  state = {
    title: '',
    topic: ''
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { postedArticle } = this.props;
    event.preventDefault();
    const user = {
      title: this.state.title
    };
    api
      .AddArticle(user)
      .then(({ data: { article: addedArticle } }) => {
        const newArticle = {
          _id: addedArticle["_id"],
          title: addedArticle["title"]
        };

        postedArticle(newArticle);
      })
      .catch();
    this.setState(() => {
      const newState = {
        title: "",
        topic: ""
      };
      return newState;
    });
  };

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label id="form-name">
        Title
          <input
          type="text"
          name="title"
          id="form-name"
          onChange={this.handleChange}
          value={this.state.title}
        ></input>
      </label>
      <label id="topic">
        {" "}
        Topic
          <input
          type="text"
          name="topic"
          onChange={this.handleChange}
          value={this.state.topic}
        ></input>
      </label>
      <button type="submit">Add Article</button>
    </form>);
  }
}

export default AddArticle;