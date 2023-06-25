import React from 'react'
import './style.css';
export default function Note(probs) {
    function handleClick(){
        probs.onDelete(probs.id);
    }
  return (
    <div className="note">
      <h1>{probs.title}</h1>
      <p>{probs.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  )
}
