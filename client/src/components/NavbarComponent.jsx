import React from 'react';
import './NavbarComponent.scss'
import Button from './ButtonComponent';
import { useNavigate } from "react-router-dom";

export default function NavbarComponent(props){
  const navigate = useNavigate();

    return(
      <div className="navbar">
        <div className="navbar-home"><Button text="Home" onClick={() => navigate("/home")} /></div>
        <div className="navbar-news"><Button text="News" onClick={() => navigate("/news")} /></div>
        <div className="navbar-archived"><Button text="Archived" onClick={() => navigate("/archived")} /></div>
      </div>
    );
  };
