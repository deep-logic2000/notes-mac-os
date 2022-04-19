import {
  FETCH_DATA,
  SET_IS_LOADING,
  ADD_NOTE,
  DELETE_NOTE,
  CHANGE_NOTE,
  SEARCH_NOTES,
} from "../actions/notesAction";
import { dbAdd, dbEditNote, dbDeleteNote, dbGetAllNotes } from "../../components/api/db";
// import {setCurrentNote} from "../../App";
import { setIsOpenModalAC } from "./modalAC";

export const fetchData = () => async dispatch => {
  dispatch(setIsLoading(true));
  const allNotes = await dbGetAllNotes();
  //   console.log(allNotes);
  dispatch(setIsLoading(false));
  dispatch({ type: FETCH_DATA, payload: allNotes });
};
export const setIsLoading = value => ({ type: SET_IS_LOADING, payload: value });

export const addNote = (noteTitle, noteText) => async dispatch => {
  // console.log("noteText", noteText);
  // console.log("noteTitle", noteTitle);
  dbAdd(noteTitle, noteText);

  const allNotes = await dbGetAllNotes();

  dispatch({ type: ADD_NOTE, payload: allNotes });
};

export const deleteNote = id => async dispatch => {
  dbDeleteNote(id);
  const allNotes = await dbGetAllNotes();
  dispatch({ type: DELETE_NOTE, payload: allNotes });
  dispatch(setIsOpenModalAC(false));

  // }
};

export const editNote = (currentId, noteTitle, noteText) => dispatch => {
  // console.log("noteText", noteText);
  // console.log("noteTitle", noteTitle);
  dbEditNote(currentId, noteTitle, noteText);
  // setCurrentNote(noteText);
  dispatch({ type: CHANGE_NOTE, payload: { currentId, noteTitle, noteText } });
};

export const changeSearchValue = valueInput => async dispatch => {
  const notes = await dbGetAllNotes();
  // console.log(valueInput, notes);

  dispatch({
    type: SEARCH_NOTES,
    payload: {
      notes,
      valueInput,
    },
  });
};
