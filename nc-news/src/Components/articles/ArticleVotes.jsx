import React from 'react';

const ArticleVotes = ({ votes, updateVote }) => {
  return (<div>
    <p>{votes}</p>
    <label>
      <button onClick={updateVote}></button>
    </label>
    <label>
      <button onClick={updateVote}></button>
    </label>

  </div>);
}

export default ArticleVotes;