import React, { Component } from 'react'

import PokedexList from '../pokedexList'

class PokedexPage extends Component {
    onSearchPokemon() {

    }

    onAddPokemonToList() {

    }

    render() {
        return (
            <>
                <input type="text" placeholder={'find pokemon'}/>
                <PokedexList/>
                <div className={'add-more-section'}>
                    <button type={'button'}>+</button>
                </div>
            </>
        )
    }
}

export default PokedexPage
