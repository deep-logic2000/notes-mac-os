import {
  FETCH_DATA,
  SET_IS_LOADING,
  ADD_NOTE,
  DELETE_NOTE,
  CHANGE_NOTE
} from "../actions/notesAction";
// import Dexie from "dexie";
// import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../components/api/db";
import { setIsOpenModalAC } from "./modalAC";

export const fetchData = () => async dispatch => {
  // db.notes.add({ noteTitle: "444 Titile", noteText: "444 Text" });
  dispatch(setIsLoading(true));
  const allNotes = await db.notes.toArray();
  //   console.log(allNotes);
  dispatch(setIsLoading(false));
  dispatch({ type: FETCH_DATA, payload: allNotes });
};
export const setIsLoading = value => ({ type: SET_IS_LOADING, payload: value });

export const addNote = (noteTitle, noteText) => async dispatch => {
  // console.log("noteText", noteText);
  // console.log("noteTitle", noteTitle);
  await db.notes.add({ noteTitle: noteTitle, noteText: noteText });

  const allNotes = await db.notes.toArray();

  dispatch({ type: ADD_NOTE, payload: allNotes });
};

export const deleteNote = id => async dispatch => {
  //   const {data, status} = await fetch(`http://localhost:3001/todo?id=${id}`, {
  //       method: 'DELETE',
  //   }).then(res => res.json())
  // console.log(data)
  // if(status === 'success'){
  await db.notes.delete(id);
  const allNotes = await db.notes.toArray();
  dispatch({ type: DELETE_NOTE, payload: allNotes });
  dispatch(setIsOpenModalAC(false));

  // }
};


export const editNote = (currentId, noteTitle, noteText) => async dispatch => {
  console.log("noteText", noteText);
  console.log("noteTitle", noteTitle);
  await db.notes.put({id: currentId, noteTitle: noteTitle, noteText: noteText });

  const allNotes = await db.notes.toArray();

  dispatch({ type: CHANGE_NOTE, payload: {currentId, noteTitle, noteText} });
};
