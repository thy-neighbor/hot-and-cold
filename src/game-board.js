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
            winNum:winNum,
            currGuess:Number,
            prevList:[]
        };
    }

    getGuess(currGuess){
        console.log("OOOOP THERE IT ISSSSS",currGuess);

        this.setState({
            currGuess:currGuess,
            prevList:[...this.state.prevList, {currGuess}]
        });
        //update the array here not in oldguess module
        //if not winning number dadaadaadd
        this.gameTemperature(currGuess);
    }

    gameTemperature(currGuess){
        const {winNum}=this.state;
        let ans=Math.abs(winNum-currGuess);
        let temp;
        if(ans===0){
            temp='win'
        }else if(ans<=10){
            temp='hot'
        }else if(ans>10 && ans<=15){
            temp='kinda'
        }else if(ans>15){
            temp='cold'
        }else{
            temp='win'
        }
        console.log("Current Guess",currGuess,"temp", temp, "Winning is:", winNum);
        this.setState({temp});
    }

    render(){

        return(
            <div>
                <h1>HOT or COLD</h1>
                <div className="container">
                    <HotorCold temp={this.state.temp}></HotorCold>
                    <EnterGuess onSubmit={(value) => this.getGuess(value)}></EnterGuess>
                    <OldGuess prevList={this.state.prevList}></OldGuess>
                </div> 
            </div> 
        );

    }
}