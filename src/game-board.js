//this is the game board which is statefull

import React from 'react';

import HotorCold from './hot-or-cold';
import OldGuess from './old-guess';
import EnterGuess from "./enter-guess.js";



export default class GameBoard extends React.Component{
    constructor(props){
        super(props);

        const winNum=Math.floor(Math.random() * 101)+1;

        this.state({
            temp:'init',
            winNum,
        });
    }



    render(){

        return(
            <div>
                <h1>HOT or COLD</h1>
                <div className="container">
                    <HotorCold temp={this.state.temp}></HotorCold>
                    <EnterGuess></EnterGuess>
                    <OldGuess></OldGuess>
                </div>
            </div>
        );

    }
}