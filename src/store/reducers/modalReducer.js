
import {SET_CONFIG, SET_IS_OPEN_MODAL} from "../actions/modalAction";

const initialState = {
    isOpen: false,
    config:{
        id: '',
        title: '',
        text: '',
        modalBtn: ''
    },
}

const modalReducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_IS_OPEN_MODAL:{
            return{...state, isOpen: action.payload}
        }
        case SET_CONFIG:{
            console.log(action.payload)
            return {...state, config: action.payload}

        }
        default: return state;
    }
}
export default modalReducer