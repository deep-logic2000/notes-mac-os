import React from "react";
import { addNote } from "../../store/actionCreators/noteAC";
import { useDispatch } from "react-redux";
import { Button } from 'antd';
import {setIsOpenModalAC, setConfig} from "../../store/actionCreators/modalAC"

const AddNoteButton = () => {
  const dispatch = useDispatch();
  const modalTitle = "Enter note"
  const modalBtn = "ADD"
  return (
    <div>
      <Button type="primary" className="btnAddNote" onClick={() => {
          dispatch(setIsOpenModalAC(true))
          dispatch(setConfig('', modalTitle, '', modalBtn))
          }}>
        Add Note
      </Button>
    </div>
  );
};

export default AddNoteButton;
