import {
  FETCH_DATA,
  SET_IS_LOADING,
  ADD_NOTE,
  DELETE_NOTE,
  CHANGE_NOTE,
  SEARCH_NOTES,
} from "../actions/notesAction";

const initialState = {
  notes: [],
  isLoading: false,
  searchText: "",
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      const newState = { ...state, notes: action.payload };

      // localStorage.setItem("notes", JSON.stringify(newState));
      return newState;

    case SET_IS_LOADING:
      // localStorage.setItem('notes', JSON.stringify({...state, isLoading: action.payload}));
      return { ...state, isLoading: action.payload };

    case ADD_NOTE: {
      // localStorage.setItem('notes', JSON.stringify({...state, notes: [...state.notes, action.payload]}));
      return { ...state, notes: [...state.notes, action.payload] };
    }

    case DELETE_NOTE:
      // localStorage.setItem("notes", { ...state, notes: [...state.notes, action.payload]});
      return { ...state, notes: [...state.notes, action.payload] };

    case CHANGE_NOTE:
      // const tempNotes = [...state.notes];

      // localStorage.setItem('notes', JSON.stringify({...state, notes: action.payload}));
      return { ...state, notes: [...state.notes, action.payload] };

    case SEARCH_NOTES:
      const { notes, valueInput } = action.payload;
      const newState1 = notes.filter(elem =>
        elem.noteTitle.includes(valueInput)
      );
      return { ...state, notes: newState1, searchText: valueInput };

    default:
      return state;
  }
};
export default notesReducer;
