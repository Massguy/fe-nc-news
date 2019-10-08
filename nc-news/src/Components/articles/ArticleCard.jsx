import React from 'react';
const ArticleCard = (props) => {
  const { article } = props;
  return (<div className='grid'>
    <h3>{article.title}</h3>
    <h3>{article.author}</h3>
    <h3>{article.topic}</h3>
  </div>);
}

export default ArticleCard;