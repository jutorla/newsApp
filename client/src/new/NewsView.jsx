import React, { useContext, useEffect, useState } from 'react';
import './NewsView.css'
import New from "../components/NewComponent"

export default function NewsView(props){
  const {
    fetchNews,
    title,
    description,
    date,
    content,
    author,
  } = props;

    return(
      <div className="new-view">
         <span className="fetch-news" onClick={()=>fetchNews()}>Fetch News</span>
        <New 
        title={title}
        description={description}
        date={date}
        content={content}
        author={author}
        />
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
  