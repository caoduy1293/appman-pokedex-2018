import React, { Component } from 'react'

import PokedexList from '../pokedexList'

class PokedexPage extends Component {
    onRemovePokemon() {

    }

    render() {
        return (
            <>
                <h1>Pokedex</h1>
                <PokedexList/>
                <div className={'add-more-section'}>
                    <button type={'button'}>+</button>
                </div>
            </>
        )
    }
}

export default PokedexPage