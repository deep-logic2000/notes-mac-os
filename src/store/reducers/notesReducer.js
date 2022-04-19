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
  activeNoteText: "",
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
    const newState = { ...state, notes: action.payload };
    // localStorage.setItem("notes", JSON.stringify(newState));
    return newState;
    }

    case SET_IS_LOADING:
      // localStorage.setItem('notes', JSON.stringify({...state, isLoading: action.payload}));
      return { ...state, isLoading: action.payload };

    case ADD_NOTE: {
      // localStorage.setItem('notes', JSON.stringify({...state, notes: [...state.notes, action.payload]}));
      const newState =  action.payload;
      return { ...state, notes: newState };
    }

    case DELETE_NOTE: {
      // localStorage.setItem("notes", { ...state, notes: [...state.notes, action.payload]});
      
      const newState =  action.payload;  
      return { ...state, notes: newState };
    }

    case CHANGE_NOTE: {
      const {currentId, noteTitle, noteText} = action.payload;
      const index = state.notes.findIndex((item) => item.id === currentId)
      console.log(index)
            if(index === -1){
                return state
            }
      const tempNotes = [...state.notes];
      tempNotes[index].noteTitle = noteTitle;
      tempNotes[index].noteText = noteText;
      // localStorage.setItem('notes', JSON.stringify({...state, notes: action.payload}));
      return { ...state, notes: tempNotes };

    }

    case SEARCH_NOTES: {
      const { notes, valueInput } = action.payload;
      const newState = notes.filter(elem =>
        elem.noteTitle.includes(valueInput) || elem.noteText.includes(valueInput)
      );
      return { ...state, notes: newState, searchText: valueInput };
    }

    default:
      return state;
  }
};
export default notesReducer;
