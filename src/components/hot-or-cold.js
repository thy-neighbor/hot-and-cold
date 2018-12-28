//gets the number as a prop and displays whether hot or cold, or when you win

import React from 'react';


export default function HotorCold(props){
    let text;
    if(props.temp == 'cold'){
        text='Cold';
    }else if(props.temp == 'init'){
        text='Make your Guess'
    }else if(props.temp == 'hot'){
        text='Hot';
    }else if(props.temp == 'kinda'){
        text='Kinda Hot';
    }else{//win case
        text='You Won. Click new game to play again';
    }

    return(
        <div className="hot-or-cold">
            <strong>
                {text}
            </strong>
        </div>
    );

}