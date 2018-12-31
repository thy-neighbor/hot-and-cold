
//form for entering guess(static)

import React from 'react';

export default function EnterGuess(props){
    return(
        <div className="EnterGuess">
            <form onSubmit={e => {e.preventDefault(); props.onSubmit(e.target.value);}}>
                <input placeholder="Enter Your Guess" id="input-guess" type="number" value={props.value}/>
                <button type="Submit">Guess</button>
            </form>
        </div>
    );

}
