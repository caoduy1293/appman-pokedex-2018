import React from 'react';
import styled from "styled-components";
import * as R from 'ramda'

import CuteImg from "../cute.png";
import {calcHap, calcStr, calcWeak, calHp} from "../util";

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 5px;
  background-color: #f3f4f7;
  display:flex;
  max-height: 220px;
  margin-bottom: 10px;
  &.pokedex {
    width:45%;
    margin: 10px 1%;
  }
  .add{
    display:none;
  }
  &:hover {
    box-shadow: 3px 3px 5px #aeaeae;
    .add{
      display:block;
      cursor: pointer;
    }
  }
`;

const CardPicture = styled.div`
  height:100%;
  display: flex;
  width: 160px;
  img{
    width: 100%;
  }
`;
const StatContainer = styled.div`
  display: flex;
  margin-top: 4px;
  span {
    width: 80px;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  width: 70%;
  h1 {
    margin-top: 0;
    font-family: Gaegu;
  }
  margin: 0 20px;
`;

const ProgressBar = styled.div`
  margin-left: 10px;
  border-radius: 25px;
  height: 24px;
  width: 100%;
  background-color: #e4e4e4;
  box-shadow: 1px 1px #d4d4d4;
  &::after {
    content: '';
    border-radius: 25px;
    display: block;
    background-color: #f3701a;
    height: 24px;
    width: ${props => `${props.value*10 || 0}%`};
    z-index: 2;
  }
`;
const CuteImgStyle = styled.img`
  width: 38px;
  margin: 0 2px;
  &.pokedex{
    width:25px;
  }
`;

const AddContent = styled.div`
  color:#dc7777;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const CardPokemon = ({search='', name='', onDelete, isPokedex = false, imageUrl, hp, onAdd, convertedRetreatCost, weaknesses, cardId})=>{

    const hpValue = calHp(hp);
    const str = calcStr(convertedRetreatCost);
    const weak = calcWeak(weaknesses);
    const happy = calcHap(hpValue,str,weak);
    const upperName = name.toUpperCase();
    const upperSearch = search.toUpperCase();

    return (
        (!search || upperName.indexOf(upperSearch) > -1 )&&
        <CardWrapper className={ isPokedex ? 'pokedex' : ''}>
            <CardPicture>
                <img src={imageUrl} alt={''}/>
            </CardPicture>
            <DetailWrapper>
                <h1>{name}</h1>
                <StatContainer>
                    <span>HP</span> <ProgressBar value={hpValue/10} />
                </StatContainer>
                <StatContainer>
                    <span>STR</span> <ProgressBar value={str/10} />
                </StatContainer>
                <StatContainer>
                    <span>WEAK</span> <ProgressBar value={weak/10} />
                </StatContainer>
                <div style={{marginTop:'10px'}}>
                    {[...Array(happy).keys()].map(item => {
                        return <CuteImgStyle className={isPokedex ? 'pokedex':''} key={item} src={CuteImg} alt="" />
                    })}
                </div>
            </DetailWrapper>
            {!isPokedex && <AddContent onClick={(e) => onAdd(cardId)} className="add">ADD</AddContent>}
            {isPokedex && <AddContent onClick={() => onDelete(cardId)} className="add">X</AddContent>}
        </CardWrapper>
    )
};
