import React from 'react'
import './style.css';
export default function Footer() {
  
      const currentYear = new Date().getFullYear();
    
      return ( 
      <footer>
        copyright   © {currentYear}
        <p class="text">Created with <i class="fa fa-heart"></i> by Anjali </p>
    <p>
        <a href="https://www.linkedin.com/in/anjali-raj-5796a71a7" target="_blank" class="link">
            <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
     
        </a>
        <a href="https://github.com/AnjaliRaj05" target="_blank" class="link">
            <i class="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
    </p>
      </footer>


  )
}
