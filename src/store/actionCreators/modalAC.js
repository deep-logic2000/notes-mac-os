import { SET_CONFIG, SET_IS_OPEN_MODAL } from "../actions/modalAction";

export const setIsOpenModalAC = isOpen => ({
  type: SET_IS_OPEN_MODAL,
  payload: isOpen,
});

export const setConfig = (id, title, text, modalBtn) => ({
  type: SET_CONFIG,
  payload: { id, title, text, modalBtn },
});
