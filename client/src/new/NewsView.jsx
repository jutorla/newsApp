import React, { useContext, useEffect, useState } from 'react';
import './NewsView.scss'
import New from "../components/NewComponent"

export default function NewsView(props){
  const {
    fetchNews,
    newData,
    archiveNew,
  } = props;

    return(
      <div className="new-view">
         <span className="fetch-news" onClick={()=>fetchNews()}>Fetch News</span>
         {newData.length? (newData.map((newData) => (
        <New 
        title={newData.title}
        description={newData.description}
        date={newData.date}
        content={newData.content}
        author={newData.author}
        archiveNew={archiveNew}
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
  