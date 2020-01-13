import * as R from 'ramda'
import { ADD_POKEDEX, REMOVE_POKEDEX } from "../actions";

export default (state = [], {type, payload}) => {
    switch(type){
        case ADD_POKEDEX:
            return [...state, payload];
        case REMOVE_POKEDEX:

            return R.reject(({nationalPokedexNumber})=>nationalPokedexNumber===payload)(state);
        default:
            return state;
    }
}
