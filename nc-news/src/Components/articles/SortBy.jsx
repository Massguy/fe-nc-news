import React, { Component } from 'react'

class SortBy extends Component {
  state = {
    sort_by: 'comment_count',
    order: 'desc'
  }
  render() {
    const { updateSortby, updateOrder, updateAuthor } = this.props
    return (
      <div className='sortBy'>
        <form className='commentCount'>Filter:
          <select onChange={updateSortby}>
            <option value='comment_count'>comment_count</option>
            <option value='created_at'>date created</option>
            <option value='votes'>votes</option>
          </select>
        </form>
        <form className='order'>Order:<select onChange={updateOrder}>
          <option value='asc'>ascending</option>
          <option value='desc'>descending</option>
        </select>
        </form>
        <form>Author:
          <select onChange={updateAuthor}>
            <option value='none'>none </option>
            <option value='weegembump'>weegembump </option>
            <option value='grumpy19'>grumpy19 </option>
            <option value='happyamy2016'>happyamy2016 </option>
            <option value='jessjelly'>jessjelly </option>
            <option value='tickle122'>tickle122 </option>
            <option value='cooljmessy'>cooljmessy </option>
          </select>
        </form>
      </div>
    );
  }

}

export default SortBy;