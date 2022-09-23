import React, { useContext, useEffect, useState } from 'react';
import NewsView from "./NewsView"
import Api from '../api/Api';

function NewContainer(props) {
  const [values, setValues] = useState({
    newData: [],
  })

  async function fetchNews(){
    const fetchedNews= await (Api.news());
    console.log(fetchedNews.data);
    setValues((oldValues) => ({
      ...oldValues,
      newData: fetchedNews.data,
      }));
    }
   async function archiveNew(id){
      await (Api.archiveNew(id))
      fetchNews()
      }

 return(
      <NewsView
      fetchNews={fetchNews}
      newData={values.newData}
      changeStatus={()=>archiveNew}
      />

  );
};
export default NewContainer;