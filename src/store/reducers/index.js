import {combineReducers} from "redux";
import notesReducer from "./notesReducer";
// import modalReducer from "./modalReducer";


const reducer = combineReducers({
    notes: notesReducer,
    // modal: modalReducer
})

export default reducer