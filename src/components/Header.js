import React from 'react';
import img from '../assets/logo.jpg'
import './style.css';
export default function Header() {
  return (
    <div className="part">
     <img src={img}></img>
     <h1>Keeper</h1>
     
      
    </div>
  )
}
