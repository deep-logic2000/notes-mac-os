import {
    FETCH_DATA,
    SET_IS_LOADING,
} from "../actions/notesAction";

const initialState = {
    notes: [],
    isLoading: false,
    currentText: ""
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            const newState = {...state, notes: action.payload}

            // localStorage.setItem('notes', JSON.stringify(newState));
            return newState

         case SET_IS_LOADING:

            // localStorage.setItem('notes', JSON.stringify({...state, isLoading: action.payload}));
            return {...state, isLoading: action.payload}


        default:
            return state;

    }
};
export default notesReducer;