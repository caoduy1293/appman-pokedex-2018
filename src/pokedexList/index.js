import React, { Component } from 'react'
import { connect } from "react-redux";
import styled from "styled-components";

import {CardPokemon} from "../pokedexCard";
import {getPokemons, openPopUp, removePokedex, addPokedex} from "../actions";

const OverFLow = styled.div`
  flex-wrap: wrap;
  overflow: scroll;
  height: 85%;
  z-index: -1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
`;

class PokedexList extends Component {
    render() {
        console.log(this.props.pokedex);
        return (
            <OverFLow>
                {
                    this.props.pokedex.map(v => <CardPokemon onDelete={this.props.removePokedex} pokedex={true}
                                                             key={v.id} {...v} onAdd={this.props.onAddPokedex} />)
                }
            </OverFLow>
        )
    }
}

const mapStateToProps = null;

const mapDisPatchToProps = dispatch => ({
    removePokedex: (value) => dispatch(removePokedex(value)),
    onAddPokedex: (value) => dispatch(addPokedex(value))
});

export default connect(mapStateToProps,mapDisPatchToProps)(PokedexList)
