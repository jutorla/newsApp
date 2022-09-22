import React, { useContext, useEffect, useState } from 'react';
import NewsView from "./NewsView"
import Api from '../api/Api';

function NewContainer(props) {
  const [values, setValues] = useState({
    news: {
      id: '0',
      title:"title",
      description:"description",
      date:"1000-01-01",
      content:"content",
      author:"author",
      archiveDate:"1000-01-01",
    },
  })

  async function fetchNews(){
    const fetchedNews= await (Api.news());
    console.log(fetchedNews.data);
    setValues((oldValues) => ({
      ...oldValues,
      news: {
        id: fetchedNews.data[0].id,
        title:fetchedNews.data[0].title,
        description:fetchedNews.data[0].description,
        date:fetchedNews.data[0].date,
        content:fetchedNews.data[0].content,
        author:fetchedNews.data[0].author,
        archiveDate:fetchedNews.data[0].archiveDate,
      },    }));
}
 return(
      <NewsView
      fetchNews={()=>fetchNews()}
      id={values.news.id} 
      title={values.news.title} 
      description={values.news.description} 
      date={values.news.date} content={values.news.content} 
      author={values.news.author} 
      archiveDate={values.news.archiveDate}
      />

  );
};
export default NewContainer;