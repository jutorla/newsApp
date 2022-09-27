import React from 'react';
import './NewComponent.scss'
import Button from './ButtonComponent';

export default function NewView(props){
  const {
    id,
    title,
    description,
    date,
    content,
    author,
    changeStatus,
    archiveDate,
    deleteNew,
  } = props;

    return(
      <div className="new-view">
        <div className="new-view-header">
          <div className="new-view-header-title">{title}</div>
          <span className="new-view-heaer-date">Date: {date}</span>
          <span className="new-view-header-archive">
          <Button text="Archive" onClick={changeStatus()} param={id}/>
          {archiveDate ? (<Button text="Delete" onClick={deleteNew()} param={id}/>) : null}
          </span>
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
