import React from 'react';

function PokedexCard({pokemonInfo, isAddingFunctionEnabled, isRemovingFunctionEnabled}) {
    return <div>
        <div className="pokemon-avatar">
            <img src="../cute.png" alt=""/>
        </div>
        <div className="pokemon-info">
            <h2>NAME</h2>
            <p>HP</p>
            <p>STR</p>
            <p>WEAK</p>
            <div className="cute-section">
                <img src="../cute.png" alt=""/>
            </div>
        </div>
        {
            isAddingFunctionEnabled ? <button type={'button'} className={'function-button'}
                                              onClick={()=>{console.log('add')}}>add</button> : ''
        }
        {
            isRemovingFunctionEnabled ? <button type={'button'} className={'function-button'}
                                              onClick={()=>{console.log('remove')}}>X</button> : ''
        }
    </div>;
}

export default PokedexCard;
