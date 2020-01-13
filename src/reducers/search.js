import {SEARCH_POKEMON} from "../actions";

export default (state = '', {type, payload}) => {
    switch(type) {
        case SEARCH_POKEMON:
            return payload;
        default:
            return state;
    }
}
