import React, { Component } from 'react'

import * as api from '../../api'


class ArticleByTopic extends Component {
  state = {
    article: {}
  }

  render() {
    const { article } = this.state
    return (<p>{article.title}</p>);
  }
  componentDidMount() {
    const { slug } = this.props
    console.log(this.props)
    api.getArticlesByTopic(slug).then(article =>
      this.setState(() => {
        return { article }
      })
    )
  }
}

export default ArticleByTopic;