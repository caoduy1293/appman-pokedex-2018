import { combineReducers } from 'redux';

import pokemon from './pokemon'
import pokedex from './pokedex'
import popUp from './popUp'
import search from './search'

export default combineReducers({
    pokemon,
    pokedex,
    popUp,
    search,
})
