import React, { Component } from 'react'
import { connect } from "react-redux";
import styled from "styled-components";

import {CardPokemon} from "../pokedexCard";
import {removePokedex} from "../actions";

const OverFLow = styled.div`
  flex-wrap: wrap;
  overflow: scroll;
  height: 72%;
  z-index: -1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
`;

class PokedexList extends Component {
    render() {
        return (
            <OverFLow>
                {
                    this.props.pokedex.map(v => <CardPokemon onDelete={this.props.removePokedex} isPokedex={true}
                                                             key={v.id} cardId={v.id} {...v} />)
                }
            </OverFLow>
        )
    }
}

const mapStateToProps = null;

const mapDisPatchToProps = dispatch => ({
    removePokedex: (value) => dispatch(removePokedex(value))
});

export default connect(mapStateToProps,mapDisPatchToProps)(PokedexList)
