
//form for entering guess(static)

import React from 'react';

export default function EnterGuess(props){
    return(
        <div className="EnterGuess">
            <form onSubmit={e => {e.preventDefault(); window.t=e; props.onSubmit(e.target.guess.value);}}>
                <input name="guess" placeholder="Enter Your Guess" id="input-guess" min='1' max='100' value={props.value}/>
                <button type="Submit">Guess</button>
            </form>
        </div>
    );

}
