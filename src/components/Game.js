import React from 'react'
import { Board } from './board'
import './Game.css'

export const Game = () => {
    const State = 'Alive' 
    return (
        <div className='TheGameBoard'>
                <h1 style={{color : "#2680A6"}}>Mine sweeper</h1>
                <Board />

        </div>
    )
}


