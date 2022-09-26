import React, { useContext, useEffect, useState } from 'react';
import ArchivedView from "./ArchivedView"
import Api from '../api/Api';

function ArchivedContainer(props) {
  const [values, setValues] = useState({
    newData: [],
  })

  async function fetchArchivedNews(){
    const fetchedNews= await (Api.archived());
    console.log(fetchedNews.data);
    setValues((oldValues) => ({
      ...oldValues,
      newData: fetchedNews.data,
      }));
    }
   async function unArchiveNew(id){
    await (Api.unArchiveNew(id))
    fetchArchivedNews()
      }
    async function deleteNew(id){
      await (Api.deleteNew(id))
        fetchArchivedNews()
      }

 return(
      <ArchivedView
      fetchNews={fetchArchivedNews}
      newData={values.newData}
      changeStatus={()=>unArchiveNew}
      deleteNew={()=>deleteNew}
      />

  );
};
export default ArchivedContainer;