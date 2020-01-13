import React, { Component } from 'react'
import PokedexCard from '../pokedexCard'

class PokedexList extends Component {
    render() {
        const pokemons = [];
        return (
            <div>
                {
                    pokemons.map(item => <PokedexCard/>)
                }
            </div>
        )
    }
}

export default PokedexList
