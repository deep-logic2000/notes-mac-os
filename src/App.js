import React, { useState} from "react";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import Sidebar from "./components/Sidebar/Sidebar";
import Modal from "./components/Modal/Modal";
import NoteContent from "./components/NoteContent/NoteContent";
import "./App.css";

function App() {
const [currentNote, setCurrentNote] = useState('Add note, please or select anyone')
const [currentId, setCurrentId] = useState(null)

const changeCurrentNote = (value) =>{
  setCurrentNote(value)
}

const changeCurrentId = (id) =>{
  setCurrentId(id)
}

  return (
    <div className="appContainer">
      <Sidebar changeCurrentNote={changeCurrentNote} changeCurrentId={changeCurrentId}/>
      <Modal currentId={currentId}/>
      <NoteContent currentNote={currentNote} currentId={currentId}/>
      {/* <WorkSpace /> */}
    </div>
  );
}

export default App;
