import React from 'react';

const NewsListComponents = ({ newsList }) => {
  return (
    <div>
      {newsList.map((news) => {
        return <p>{news.title}</p>;
      })}
    </div>
  );
};

export default NewsListComponents;
