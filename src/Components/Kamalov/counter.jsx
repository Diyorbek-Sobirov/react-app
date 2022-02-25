import {React, useState} from 'react';


function Counter(){
    const [counter, setCounter] = useState(0);
    function add(){
        setCounter(counter + 1);
    }
    function minus(){
        setCounter(counter - 1);
    }
    function restart(){
        setCounter(0);
    }
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={restart}>restart</button>
        </div>
    )
}


export default Counter;