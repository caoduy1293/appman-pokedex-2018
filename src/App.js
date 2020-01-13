import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import './App.css'
import { getPokemons, openPopUp } from './actions';
import PokedexPopUpPage  from './pokemonsPopUpPage';
import PokedexList from './pokedexList';

const RootSection = styled.div`
  height:100%;
`;

const FooterSection = styled.div`
  height:100px;
  background-color: #ec5656;
  width:100%;
  position:absolute;
  bottom: 0;
`;

const HeaderSection = styled.div`
  text-align:center;
  position:relative;
`;

const ButtonAdd = styled.div`
 width:150px;
 height:150px;
 background-color: #dc7777;
 bottom: 0;
 position:absolute;
 margin-left: auto;
 margin-right: auto;
 z-index:1;
 right: 0;
 left: 0;
 border-radius: 100px;
 i {
    z-index:-1;
    display:flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 120px;
    background-color: #ec5656;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: inset 0px 5px 5px rgba(68,68,68,0.6);
    width:100%;
    height:100%;
    padding:0;
  }
`;

class App extends Component {

    componentDidMount(){
        this.props.getPokemons()
    }

    render() {
        return (
            <RootSection className="App">
                <HeaderSection>
                    <h1>My Pokedex</h1>
                </HeaderSection>
                <PokedexList pokedex={this.props.pokedex}/>
                <FooterSection>
                    <ButtonAdd onClick={this.props.openPopUp}>
                        <i>+</i>
                    </ButtonAdd>
                </FooterSection>
                <PokedexPopUpPage/>
            </RootSection>
        )
    }
}

const mapStateToProps = ({pokedex})=>({
    pokedex,
});

const mapDisPatchToProps = dispatch => ({
    getPokemons: () => dispatch(getPokemons()),
    openPopUp: () => dispatch(openPopUp())
});

export default connect(mapStateToProps,mapDisPatchToProps)(App)
