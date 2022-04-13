import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
// import { deleteNote } from "../../store/actionCreators/noteAC";
import {
  setIsOpenModalAC,
  setConfig,
} from "../../store/actionCreators/modalAC";
import styles from "./NoteContent.module.scss";

const NoteContent = props => {
  const { currentNote, currentId } = props;
  const notes = useSelector(({ notes }) => notes.notes);

  const dispatch = useDispatch();

  const modalTitle = "Do you really want delete this note?";
  // const modalBtn = "DELETE";
  // const modalBtnEdit = "EDIT";

  return (
    <>
      <div className={styles.noteContentWrapper}>
        <div className={styles.noteArea}>{currentNote}</div>
        <div className={styles.btnWrapper}>
        <Button
          type="primary"
          onClick={() => {
            dispatch(setConfig(currentId, "Edit your note", "", "EDIT"));
            dispatch(setIsOpenModalAC(true));
          }}
        >
          Edit
        </Button>
        <Button
          type="primary"
          danger="true"
          onClick={() => {
            dispatch(setConfig(currentId, modalTitle, "", "DELETE"));
            dispatch(setIsOpenModalAC(true));
          }}
        >
          Delete
        </Button>
        </div>
      </div>
    </>
  );
};

export default NoteContent;
