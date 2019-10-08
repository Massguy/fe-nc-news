
import React from 'react';
import '../../App.css'
const HomeArticleCard = (props) => {
  const { article } = props;
  return (<div className='grid-container'>
    <h3>{article.title}</h3>
  </div>);
}

export default HomeArticleCard;