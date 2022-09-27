import React from 'react';
import './ArchivedView.scss'
import NewComponent from "../components/NewComponent"
import ButtonComponent from '../components/ButtonComponent';

export default function ArchivedView(props){
  const {
    fetchNews,
    newData,
    changeStatus,
    deleteNew,
  } = props;

    return(
      <div className="new-view">
       <ButtonComponent  classNameButton={"button-news-view"} text={'Check archived news'} onClick={fetchNews}/>
         {newData.length? (newData.map((newData) => (
        <NewComponent 
        id={newData._id}
        title={newData.title}
        description={newData.description}
        date={newData.date.substring(0, 10)}
        content={newData.content}
        author={newData.author}
        archiveDate={newData.archiveDate}
        changeStatus={changeStatus}
        deleteNew={deleteNew}
        />
      ))):(
        <div className="no-news">Please click the button to check news</div>
      )}
      </div>
      
    );
  };