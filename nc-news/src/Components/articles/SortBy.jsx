import React, { Component } from 'react'
import './SortBy.css'

class SortBy extends Component {
  state = {
    sort_by: 'comment_count',
    order: 'desc'
  }
  render() {
    const { updateSortby, updateOrder, updateAuthor } = this.props
    return (
      <div className="sortBy">
      <div className='sortbyContainer'>
        <form className='commentCount'>
        <div className="sortBy-select">
          <label>Filter by </label>
       
          <select onChange={updateSortby}>
            <option value='comment_count'>comment_count</option>
            <option value='created_at'>date created</option>
            <option value='votes'>votes</option>
          </select>
          </div>
        </form>
        <form className='order'>
        <div className="sortBy-select">
          <label>Order: </label>
          <select onChange={updateOrder}>
          <option value='asc'>ascending</option>
          <option value='desc'>descending</option>
        </select>
        </div>
        </form>
        <form><div className="sortBy-select">
          <label>Author: </label>
          <select onChange={updateAuthor}>
            <option value='none'>none </option>
            <option value='weegembump'>weegembump </option>
            <option value='grumpy19'>grumpy19 </option>
            <option value='happyamy2016'>happyamy2016 </option>
            <option value='jessjelly'>jessjelly </option>
            <option value='tickle122'>tickle122 </option>
            <option value='cooljmessy'>cooljmessy </option>
          </select>
          </div>
        </form>
      </div>
      </div>
    );
  }

}

export default SortBy;