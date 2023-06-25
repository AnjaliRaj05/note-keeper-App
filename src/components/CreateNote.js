import React, { useState } from 'react'
import './style.css';
export default function CreateNote(probs) {

    const [note,setNote]=useState({
      title:"",
      content:""
    });

    function handleChange(event) {
     const {name,value} = event.target;
     setNote(prevNote =>{
        return {
        ...prevNote,
         [name]:value
        };
     });
    }

    function submitNote(event) {
        probs.onAdd(note);
        setNote({
          title:"",
          content:""
        });
      event.preventDefault();
    }
  return (
    <div>
      <form>
        <input name="title" onChange={handleChange}value={note.title} placeholder="title..."></input>
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="4"></textarea>
        <button onClick={submitNote}>ADD</button>
      </form>
    </div>
  )
}
