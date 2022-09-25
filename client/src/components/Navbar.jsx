import React, { useContext, useEffect, useState } from 'react';
import './Navbar.scss'
import Button from './ButtonComponent';
import { useNavigate } from "react-router-dom";

export default function Navbar(props){
  const navigate = useNavigate();

    return(
      <div className="navbar">
        <div className="navbar-home"><Button text="Home" onClick={() => navigate("/home")} /></div>
        <div className="navbar-news"><Button text="News" onClick={() => navigate("/news")} /></div>
        <div className="navbar-archieved"><Button text="Archieved" onClick={() => navigate("/archived")} /></div>
      </div>
    );
  };
