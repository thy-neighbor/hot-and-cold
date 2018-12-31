//this is the game board which is statefull

import React from 'react';

import HotorCold from './hot-or-cold';
import OldGuess from './old-guess';
import EnterGuess from "./enter-guess.js";



export default class GameBoard extends React.Component{
    constructor(props){
        super(props);

        const winNum=Math.floor(Math.random() * 101)+1;

        this.state = {
            temp:'init',
            winNum,
            currGuess:Number
        };
    }

    getGuess(currGuess){
        console.log("OOOOP THERE IT ISSSSS",currGuess);
        this.setState({
            currGuess
        });
        //if not winning number dadaadaadd
    }


    render(){

        return(
            <div>
                <h1>HOT or COLD</h1>
                <div className="container">
                    <HotorCold temp={this.state.temp}></HotorCold>
                    <EnterGuess onSubmit={(value) => this.getGuess(value)} value={this.state.currGuess}></EnterGuess>
                    <OldGuess prevEntry={this.state.currGuess}></OldGuess>
                </div> 
            </div>
        );

    }
}