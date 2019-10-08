import React, { Component } from 'react';
import * as api from '../../api'

class SingleArticle extends Component {
  state = {
    article: {}
  }
  render() {
    console.log(this.state)
    const {
      article
    } = this.state;
    return (
      <>
        <h2>{article.author}</h2>
      </>
    );
  }
  componentDidMount() {
    const { id } = this.props
    api.getSingleArticle(id).then(article => this.setState(() => {
      return { article }
    }))
  }
}

export default SingleArticle;