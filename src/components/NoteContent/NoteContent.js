import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
// import { deleteNote } from "../../store/actionCreators/noteAC";
import {
  setIsOpenModalAC,
  setConfig,
} from "../../store/actionCreators/modalAC";
import "./NoteContent.scss";

const NoteContent = props => {
  const { currentNote, currentId } = props;
  const notes = useSelector(({ notes }) => notes.notes);

  const dispatch = useDispatch();

  const modalTitle = "Do you really want delete this note?";
  const modalBtn = "DELETE";

  return (
    <>
      <div className="noteContentWrapper">
        <div>{currentNote}</div>
        <Button type="primary">Edit</Button>
        <Button
          type="primary"
          onClick={() => {
            dispatch(setIsOpenModalAC(true));
            dispatch(setConfig("", modalTitle, "", modalBtn));
          }}
        >
          Delete
        </Button>
      </div>
      ;
    </>
  );
};

export default NoteContent;
