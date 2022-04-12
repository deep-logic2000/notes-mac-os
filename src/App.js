import React, { useState} from "react";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import Sidebar from "./components/Sidebar/Sidebar";
import NoteContent from "./components/NoteContent/NoteContent";
import "./App.css";

function App() {
const [currentNote, setCurrentNote] = useState('Add note, please or select anyone')

const changeCurrentNote = (value) =>{
  setCurrentNote(value)
}

  return (
    <div className="appContainer">
      <Sidebar changeCurrentNote={changeCurrentNote}/>
      <NoteContent currentNote={currentNote}/>
      {/* <WorkSpace /> */}
    </div>
  );
}

export default App;
