import React from 'react';
const ArticleCard = (props) => {
  const { article } = props;
  return (<div>
    <h3>{article.title}</h3>

  </div>);
}

export default ArticleCard;