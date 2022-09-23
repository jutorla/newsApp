import React, { useContext, useEffect, useState } from 'react';
import './ButtonComponent.scss'

export default function ButtonComponent(props){
  const {
    text,
    onClick,
    param,
  } = props;

    return(
      <div className="button" onClick={()=>onClick(param)}>
        <span className="button-text">{text}</span>
      </div>
    );
  };
