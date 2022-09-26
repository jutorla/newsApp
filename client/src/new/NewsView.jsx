import React, { useContext, useEffect, useState } from 'react';
import './NewsView.scss'
import NewComponent from "../components/NewComponent"
import ButtonComponent from '../components/ButtonComponent';

export default function NewsView(props){
  const {
    fetchNews,
    newData,
    changeStatus,
  } = props;

    return(
      <div className="new-view">
       <ButtonComponent  classNameButton={'button-new-view'} text={'Check news'} onClick={fetchNews}/>
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
  