import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import search from '../search.png';
import { getPokemon } from '../selectors';
import {CardPokemon} from "../pokedexCard";
import { addPokedex, closePopUp, searchPokemon, removePokedex } from '../actions';

const Overlay = styled.div`
display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9;
  display: flex;
`;

export const Container = styled.div`
  width:100%;
  padding:10px;
  position:relative;
`;

export const SearchBox = styled.input`
  width: 100%;
  position: relative;
  height: 50px;
  font-size: 35px;
  padding-left:30px;
`;

export const Icon = styled.img`
  width:50px; 
  position:absolute;
  right:10px;
`;

export const Wrapper = styled.div`
  position: relative;
  height: auto;
  margin: 40px;
  width: 100%;
  background-color:#ffffff;
  overflow: hidden;
`;

const CardContainer = styled(Container)`
  padding:15px;
  height:100%;
  overflow: scroll;
`;


class PokedexPopUpPage extends React.Component{

    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.overLay = React.createRef();
    }

    onClosePopUp = (e)=>{
        if (e.target === this.overLay.current) {
            this.props.closePopUp()
        }
    };

    onAddPokedex = (value) => {
        const pokemonIChoose = this.props.pokemon.find(({nationalPokedexNumber}) => nationalPokedexNumber === value);
        this.props.addPokeDex(pokemonIChoose)
    };

    render(){
        return (
            this.props.isOpen&&
            <Overlay ref={this.overLay} onClick={this.onClosePopUp}>
                <Wrapper>
                    <Container>
                        <SearchBox onChange={(e) => {this.props.searchPokemon(e.target.value)}}/>
                        <Icon src={search}/>
                    </Container>
                    <CardContainer>
                        {
                            this.props.pokemon.map(v => <CardPokemon search={this.props.search}  key={v.id}
                                                                     {...v} onAdd={this.props.onAddPokedex}/>)
                        }
                    </CardContainer>
                </Wrapper>
            </Overlay>
        )
    }
}
const mapStateToProps = (state) => ({
    pokemon: getPokemon(state),
    isOpen: state.popUp.isOpen,
    search: state.search,
});
const mapDispatchToProps = (dispatch)=>({
    closePopUp: () => dispatch(closePopUp()),
    removePokedex: (value) => dispatch(removePokedex(value)),
    searchPokemon: (value) => dispatch(searchPokemon(value)),
    addPokeDex: (value) => dispatch(addPokedex(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokedexPopUpPage)
