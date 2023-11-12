import React, { useState } from 'react';
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent';
import SearchInputComponents from '../components/NewsSearch/SearchInputComponents';
import NewsListComponents from '../components/NewsSearch/NewsListComponents';


const NewsSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [newsList, setNewsList] = useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    setSearchValue(value);
  };
  const handleClick = () => {
    console.log('hello');
    const apiKey = '67c7ed154a9f4390993d62aa7c8d74c1';
    axios.get(`https://newsapi.org/v2/everything?q=${searchValue}&from=2023-08-19&sortBy=publishedAt&apiKey=${apiKey}`).then((response) => {
      console.log(response);
      setNewsList(response.data.articles);
    });
  };

  return (
    <div>
      <HeaderComponent title = {'News API'}></HeaderComponent>
      <SearchInputComponents
        handleChange = {handleChange}
        handleClick = {handleClick}
      ></SearchInputComponents>
      <NewsListComponents newsList = {newsList}></NewsListComponents>
    </div>
  );
};

export default NewsSearch;
