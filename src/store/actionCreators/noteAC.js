import {
  FETCH_DATA_FROM_LS,
  FETCH_DATA,
  SET_IS_LOADING,
  ADD_NOTE,
} from "../actions/notesAction";
// import Dexie from "dexie";
// import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../components/api/db";
// import { setIsOpenModalAC } from "./modalAC";

export const fetchData = () => async dispatch => {
    // db.notes.add({ noteTitle: "444 Titile", noteText: "444 Text" });
  dispatch(setIsLoading(true));
  const allNotes = await db.notes.toArray();
  //   console.log(allNotes);
  dispatch(setIsLoading(false));
  dispatch({ type: FETCH_DATA, payload: allNotes });
};
export const setIsLoading = value => ({ type: SET_IS_LOADING, payload: value });

export const fetchDataFromLS = data => ({
  type: FETCH_DATA_FROM_LS,
  payload: data,
});

export const addNote = (title, value) => {
  console.log("VALUE", value);
  console.log("TITLE", title);
  db.notes.add({ noteTitle: "888 Titile", noteText: "888 Text" });

  return async dispatch => {
    const { data } = await fetch("http://localhost:3001/todo", {
      method: "POST",
      body: JSON.stringify({ text: value }),
      headers: {
        "content-type": "application/json",
      },
    }).then(res => res.json());

    dispatch({ type: ADD_NOTE, payload: data });
  };
};
