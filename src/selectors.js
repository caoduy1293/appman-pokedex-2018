import * as R from 'ramda'
import { createSelector } from "reselect";

export const getPokemon = createSelector(
    state => state.pokemon,
    state => state.pokedex,
    state => state.search,
    (pokemon = [], pokedex = [],search = '') => {
        if(pokedex.length === 0){
            return pokemon
        }

        const pokedexIds = pokedex.map(({id}) => id);
        const filterList = pokemon.filter(({id}) => pokedexIds.indexOf(id) === -1 );
        if(search){
            return filterList.filter(
                ({name}) => name.toLowerCase().indexOf(search.toLowerCase()) > -1,
            )
        }
        return filterList
    }
);
