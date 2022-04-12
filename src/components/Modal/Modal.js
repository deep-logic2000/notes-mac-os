import React, { useState } from "react";
import styles from "./Modal.module.scss";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenModalAC } from "../../store/actionCreators/modalAC";
import { Input, TextArea } from "antd";
import { addNote, deleteNote } from "../../store/actionCreators/noteAC";
// import {deleteNote} from "../../store/actionCreators/noteAC";

const Modal = props => {
  const { currentId } = props;
  const { isOpen, config } = useSelector(({ modal }) => modal);
  const [valueTitle, setValueTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  console.log(valueTitle, noteText);

  const dispatch = useDispatch();
  if (!isOpen) {
    return null;
  }
  const { TextArea } = Input;
  console.log(config.id);
  return (
    <div className={styles.root}>
      <div
        className={styles.background}
        onClick={() => {
          dispatch(setIsOpenModalAC(false));
        }}
      />
      <div className={styles.content}>
        <div className={styles.closeWrapper}>
          <Button
            onClick={() => {
              dispatch(setIsOpenModalAC(false));
            }}
          >
            Close
          </Button>
        </div>
        <h2>{config.title}</h2>
        {config.modalBtn === "ADD" && (
          <Input
            placeholder="Enter title of note"
            value={valueTitle}
            onChange={e => {
              setValueTitle(e.target.value);
            }}
          />
        )}
        {config.modalBtn === "ADD" ? (
          <TextArea
            rows={4}
            placeholder="Enter note"
            value={noteText}
            onChange={e => {
              setNoteText(e.target.value);
            }}
          />
        ) : (
          ""
        )}

        <div className={styles.buttonContainer}>
          {/* <Button type="primary" onClick={()=>{dispatch(deleteNote(config.id))}} variant="contained">YES</Button>
                    <Button type="primary" onClick={()=>{dispatch(setIsOpenModalAC(false))}} variant="contained" color="warning">NO</Button> */}
          {config.modalBtn === "ADD" ? (
            <Button
              type="primary"
              onClick={() => {
                dispatch(addNote(valueTitle, noteText));
                dispatch(setIsOpenModalAC(false));
                setValueTitle("");
                setNoteText("");
              }}
            >
              {config.modalBtn}
            </Button>
          ) : null}
          {config.modalBtn === "DELETE" ? (
            <Button
              type="primary"
              onClick={() => {
                dispatch(deleteNote(currentId));
                dispatch(setIsOpenModalAC(false));
              }}
            >
              {config.modalBtn}
            </Button>
          ) : null}
          <Button type="primary">NO</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
