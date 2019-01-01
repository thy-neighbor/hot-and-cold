//stateful gets array of data to be displayed

//this needs to be static
import React from 'react';


export default function OldGuess(props){
   
    const {prevList} = props;
    console.log("THIS IS VALUE --->",prevList);
    const lists= prevList.map((value,index) =>{
        
        return(
            <li key={index}>
                {value.currGuess}
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