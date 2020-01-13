import { OPEN_POP_UP, CLOSE_POP_UP } from "../actions";

const initialState = {
    isOpen:false,
};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case CLOSE_POP_UP:
            return {
                ...state,
                isOpen:false
            };
        case OPEN_POP_UP:
            return {
                ...state,
                isOpen:true
            };
        default:
            return {...state};
    }
}
