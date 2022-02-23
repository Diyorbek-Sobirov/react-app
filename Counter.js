import { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';

function App() {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        console.log("increment")
        setCounter(state => ++state)
    }
    const handleDecrement = () => {
        setCounter(state => --state)

    }
    return (
        <div className="App">
            <div> {counter}</div>

            <button onClick={handleIncrement}>++</button>
            <button onClick={handleDecrement}>--</button>
            {/* <TodoList /> */}
        </div>
    );
}

export default App;
