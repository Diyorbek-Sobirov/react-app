import { useState } from 'react';
import './App.scss';
import TodoList from './Components/TodoList/TodoList';
import Modal from './Components/Modal/Modal';
import MJurayev from './Components/MJurayev/MJurayev';
import Kamalov from './Components/Kamalov/counter';
function App() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(x=>!x)
  }
  return (
    <div className="App">
      <button onClick={handleClick} >Open Modal</button>
      <Modal setIsOpen={setOpen} isOpen={open} />
      <TodoList />
      <MJurayev />
      <Kamalov /> 
    </div>
  );
}


export default App;
