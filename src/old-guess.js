//stateful gets array of data to be displayed
import React from 'react';


export default class OldGuess extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            prev:[]
        }
    }

    addPrev(value){
        this.setState({
            cards:[...this.state.cards, {
                value
            }]
        });
    }

    render(){
        const lists= this.props.prevList.map((value,index)=>{
            return(
                <li key={index}>
                    {value}
                </li>
            );
        });

        return(
            <div className="OldGuess">
                <ul className="list">
                    {lists}
                </ul>
            </div>
        );
    }

    
}