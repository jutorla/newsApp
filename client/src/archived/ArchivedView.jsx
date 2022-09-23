import React, { useContext, useEffect, useState } from 'react';
import './ArchivedView.scss'
import NewComponent from "../components/NewComponent"

export default function ArchivedView(props){
  const {
    fetchNews,
    newData,
    changeStatus,
  } = props;

    return(
      <div className="Archived-view">
         <span className="fetch-news" onClick={()=>fetchNews()}>Retrieve archieved news</span>
         {newData.length? (newData.map((newData) => (
        <NewComponent 
        id={newData._id}
        title={newData.title}
        description={newData.description}
        date={newData.date.substring(0, 10)}
        content={newData.content}
        author={newData.author}
        changeStatus={changeStatus}
        />
      ))):(
        <div className="no-news">Please click the button to check news</div>
      )}

      </div>
      
    );
  };

  
// NewView.propTypes = {
//   recipesToAdd: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
// };
// 
// NewView.defaultProps = {
//   recipesToAdd: [],
// };
  