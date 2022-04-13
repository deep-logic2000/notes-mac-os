import {
  FETCH_DATA,
  SET_IS_LOADING,
  ADD_NOTE,
  DELETE_NOTE,
  CHANGE_NOTE,
  SEARCH_NOTES,
} from "../actions/notesAction";
import { dbAdd, dbEditNote, dbDeleteNote } from "../../components/api/db";
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
  dbAdd(noteTitle, noteText);

  const allNotes = await db.notes.toArray();

  dispatch({ type: ADD_NOTE, payload: allNotes });
};

export const deleteNote = id => async dispatch => {
  dbDeleteNote(id);
  const allNotes = await db.notes.toArray();
  dispatch({ type: DELETE_NOTE, payload: allNotes });
  dispatch(setIsOpenModalAC(false));

  // }
};

export const editNote = (currentId, noteTitle, noteText) => dispatch => {
  // console.log("noteText", noteText);
  // console.log("noteTitle", noteTitle);
  dbEditNote(currentId, noteTitle, noteText);
  dispatch({ type: CHANGE_NOTE, payload: { currentId, noteTitle, noteText } });
};

export const changeSearchValue = valueInput => async dispatch => {
  const notes = await db.notes.toArray();
  // console.log(valueInput, notes);

  dispatch({
    type: SEARCH_NOTES,
    payload: {
      notes,
      valueInput,
    },
  });
};
