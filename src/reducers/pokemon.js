import { GET_POKEMONS } from "../actions";

export default (state = [], {type, payload}) => {
    switch(type) {
        case GET_POKEMONS:
            return payload;
        default:
            return state;
    }
}
