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
   async function archiveNew(){
      console.log("ArchiveNew");
      }

 return(
      <NewsView
      fetchNews={fetchNews}
      newData={values.newData}
      archiveNew={archiveNew}
      />

  );
};
export default NewContainer;