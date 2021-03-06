import React, { Component } from 'react'
import * as api from '../../api'
import { Link } from "@reach/router";
import ErrorHandle from '../ErrorHandle';
import Loading from '../Loading'

class GetTopics extends Component {
  state = { topics: [], error: null, isLoading: true }
  render() {
    const { topics, error, isLoading } = this.state
    if (isLoading) return <Loading />
    if (topics.length === 0) return <ErrorHandle status={error.status} msg={error.msg} />
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
      .catch((error) => {
        const { status } = error.response;
        const { msg } = error.response.data
        this.setState({ error: { status, msg }, isLoading: false })
      })
  }

}

export default GetTopics;