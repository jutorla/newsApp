import React, { useContext, useEffect, useState } from 'react';
import './NewComponent.scss'
import ButtonComponent from './ButtonComponent';

export default function NewView(props){
  const {
    title,
    description,
    date,
    content,
    author,
    archiveNew,
  } = props;

    return(
      <div className="new-view">
        <div className="new-view-header">
          <div className="new-view-header-title">{title}</div>
          <span className="new-view-heaer-date">Date: {date}</span>
          {console.log(archiveNew)}
          <span className="new-view-header-archive"><ButtonComponent text="Archive" onClick={archiveNew} /></span>
        </div>
        <div className="new-view-body">
          <span className="new-view-body-content">{content}</span>
        </div>
        <div className="new-view-footer">
          <span className="new-view-footer-abstract"> Abstract: {description}</span>
          <span> Autor: {author}</span>
      </div>
      </div>
    );
  };
