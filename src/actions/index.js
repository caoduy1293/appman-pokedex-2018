import axios from 'axios'

export const GET_POKEMONS  = 'GET_POKEMONS';
export const SEARCH_POKEMON  = 'SEARCH_POKEMON';
export const getPokemons = () => {
    return async dispatch => {
        const response = await axios.get('http://localhost:3030/api/cards');
        dispatch({
            type: GET_POKEMONS,
            payload: response.data.cards
        })
    }
};
export const searchPokemon = (v) => {
    return dispatch => {
        dispatch({
            type: SEARCH_POKEMON,
            payload: v
        })
    }
};

export const ADD_POKEDEX  = 'ADD_POKEDEX';
export const REMOVE_POKEDEX  = 'REMOVE_POKEDEX';
export const addPokedex = (value) => {
    return dispatch => {
        dispatch({
            type: ADD_POKEDEX,
            payload: value
        })
    }
};
export const removePokedex = (value) => {
    return dispatch => {
        dispatch({
            type: REMOVE_POKEDEX,
            payload: value
        })
    }
};

export const OPEN_POP_UP  = 'OPEN_POP_UP';
export const CLOSE_POP_UP  = 'CLOSE_POP_UP';
export const openPopUp =() => {
    return dispatch=>{
        dispatch({
            type: OPEN_POP_UP,
        })
    }
};
export const closePopUp =() => {
    return dispatch => {
        dispatch({
            type: CLOSE_POP_UP,
        })
    }
};


