import React, { useContext, useEffect, useState } from 'react';
import './NewComponent.css'

export default function NewView(props){
  const {
    title,
    description,
    date,
    content,
    author,
  } = props;

    return(
      <div className="new-view">
        <div className="new-view-header">
          <div>{title}</div>
          <span>{date}</span>
          <div>Boton</div>
        </div>
        <div className="new-view-body">
          <span>{content}</span>
        </div>
        <div className="new-view-footer">
          <span>{description}</span>
          <span>{author}</span>
      </div>
      </div>
    );
  };
