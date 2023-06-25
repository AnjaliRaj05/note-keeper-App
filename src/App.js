import React, { useState } from "react";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
//import Notepad from './components/Notepad';
import CreateNote from './components/CreateNote';
//console.log(Notepad);
// function createNotes(noteItem) {
//   return  <Note 
//   key={noteItem.key}
//   title={noteItem.title}
//   content={noteItem.content}
  
//   />;
// }
function App() {
  const [notes,setNotes]=useState([]);


  function addNote(newNote) {
     setNotes(prevNotes=>{
     return [...prevNotes,newNote];
     });
  }

  function deleteNote(id) {
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
       return index !==id; 
      });
    });
  }
  return (
    <div>
       
       <Header/>
       <CreateNote onAdd={addNote} />
      {notes.map((noteItem,index) =>{
   return (
      
       <Note
        key={index}
       id={index}
        title={noteItem.title} 
        content={noteItem.content}
        onDelete={deleteNote}
        />
  );
      })}
       <Footer/>
       
    </div>
  );
}

export default App;
