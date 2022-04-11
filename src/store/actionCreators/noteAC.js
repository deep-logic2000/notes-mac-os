import {
  FETCH_DATA_FROM_LS,
  FETCH_DATA,
  SET_IS_LOADING,
} from "../actions/notesAction";
// import { setIsOpenModalAC } from "./modalAC";

export const fetchData = () => {
  return dispatch => {
    dispatch(setIsLoading(true));
    const data = localStorage.getItem('notes') == null ? [] : JSON.parse(localStorage.getItem('notes'));

    dispatch(setIsLoading(false));
    dispatch({ type: FETCH_DATA, payload: data });
  };
};
export const setIsLoading = value => ({ type: SET_IS_LOADING, payload: value });

export const fetchDataFromLS = data => ({
  type: FETCH_DATA_FROM_LS,
  payload: data,
});

