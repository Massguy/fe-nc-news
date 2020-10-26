import React from 'react';
import './ArticleList.css'
const ArticleCard = (props) => {
  const { article } = props;
  return (<div className='cardTitle'>
    <h3>{article.title}</h3>

  </div>);
}

export default ArticleCard;