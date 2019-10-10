import React, { Component } from 'react'

class SortBy extends Component {
  state = {
    sort_by: 'votes',
    order: 'desc'
  }
  render() {
    return (
      <form>
        <select onChange={(event) => this.handleChange(event.target.value)}>
          <option value='comment_count'>comment_count</option>
          <option value='date created'>date created</option>
          <option value='votes'>votes</option>
        </select>
      </form>

    );
  }
  handleChange = (value) => {
    console.log(value)
    const { updateSortby } = this.props
    updateSortby(value)
  }
}

export default SortBy;