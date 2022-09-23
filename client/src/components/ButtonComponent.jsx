import React, { useContext, useEffect, useState } from 'react';
import './ButtonComponent.scss'

export default function ButtonComponent(props){
  const {
    text,
    onClick,
  } = props;

    return(
      <div className="button" onClick={()=>onClick()}>
        <span className="button-text">{text}</span>
      </div>
    );
  };
