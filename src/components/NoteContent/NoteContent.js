import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./NoteContent.scss";

const NoteContent = (props) => {
    const {currentNote} = props;
    const notes = useSelector(({ notes }) => notes.notes);

  return <div className="noteContentWrapper">{currentNote}</div>;
};

export default NoteContent;
