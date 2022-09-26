import React, { useContext, useEffect, useState } from 'react';
import './ButtonComponent.scss'
import PropTypes from 'prop-types';


export default function ButtonComponent(props){
  const {
    text,
    onClick,
    param,
    classNameButton,
    classNameText,
  } = props;

    return(
      <div className={classNameButton} onClick={()=>onClick(param)}>
        <span className={classNameText}>{text}</span>
      </div>
    );
  };

  ButtonComponent.propTypes = {
    classNameButton: PropTypes.string,
    classNameText: PropTypes.string,

  }
  ButtonComponent.defaultProps={
    classNameButton:'button',
    classNameText:'button-text',
  }
