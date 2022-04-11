import {
    FETCH_DATA,
    SET_IS_LOADING,
    FETCH_DATA_FROM_LS
} from "../actions/notesAction";

const initialState = {
    notes: [],
    isLoading: false
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            const newState = {...state, notes: action.payload}

            localStorage.setItem('notes', JSON.stringify(newState));
            return newState

        case FETCH_DATA_FROM_LS: {
            return {...state, notes: action.payload}
        }

        case SET_IS_LOADING:

            localStorage.setItem('notes', JSON.stringify({...state, isLoading: action.payload}));
            return {...state, isLoading: action.payload}


        default:
            return state;

    }
};
export default notesReducer;