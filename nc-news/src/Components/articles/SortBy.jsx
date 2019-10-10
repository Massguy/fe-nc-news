import React, { Component } from 'react'

class SortBy extends Component {
  state = {
    sort_by: 'comment_count'
  }
  render() {
    const { updateSortby } = this.props
    return (
      <form>
        <select onChange={updateSortby}>
          <option value='comment_count'>comment_count</option>
          <option value='created_at'>date created</option>
          <option value='votes'>votes</option>
        </select>
      </form>

    );
  }

}

export default SortBy;