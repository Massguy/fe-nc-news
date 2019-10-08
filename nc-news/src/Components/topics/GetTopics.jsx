import React, { Component } from 'react';
import * as api from '../../api'

class GetTopics extends Component {
  state = { topics: [] }
  render() {
    return (  );
  }
  componentDidMount () {
    api.getArticlesByTopic()
  }
}

export default GetTopics;