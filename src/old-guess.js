//stateful gets array of data to be displayed
import React from 'react';


export default class OldGuess extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            prevList:[]
        }
    }

    addPrev(prevEntry){
        prevEntry=Number(prevEntry);
        this.setState({
            prevList:[...this.state.prevList, {prevEntry}]
        });
    }

    render(){

        //this.addPrev(this.props.prevEntry);

        const lists= this.state.prevList.map((value,index)=>{
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

OldGuess.defaultProps = {
    prevEntry: ''
};
