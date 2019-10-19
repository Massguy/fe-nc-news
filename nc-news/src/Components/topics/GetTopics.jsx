import React, { Component } from 'react'
import * as api from '../../api'
import { Link } from "@reach/router";

class GetTopics extends Component {
  state = { topics: [], error: null }
  render() {
    const { topics } = this.state

    return (<div>
      {topics.map(topic => <div key={topic.slug}>
        <Link to={`/topics/${topic.slug}`}>
          <h2>{topic.slug}</h2>
        </Link>
        <h3>{topic.description}</h3>
      </div>)}
    </div>);
  }
  componentDidMount() {
    api.getAllTopics().then(({ data }) => {
      this.setState(data);
    })
  }

}

export default GetTopics;