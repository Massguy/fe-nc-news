import React, { Component } from 'react'

class SortBy extends Component {
  state = {
    sort_by: 'comment_count',
    order: 'desc'
  }
  render() {
    const { updateSortby, updateOrder } = this.props
    return (
      <div>
        <form>
          <select onChange={updateSortby}>
            <option value='comment_count'>comment_count</option>
            <option value='created_at'>date created</option>
            <option value='votes'>votes</option>
          </select>
        </form>
        <form>
          <select onChange={updateOrder}>
            <option value='asc'>ascending</option>
            <option value='desc'>descending</option>
          </select>
        </form>
      </div>
    );
  }

}

export default SortBy;