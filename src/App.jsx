import { useState } from 'react';
import './App.scss';
import TodoList from './Components/TodoList/TodoList';
import Modal from './Components/Modal/Modal';
import fullName from './Components/Sanjarbek/Sanjar';
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
      <fullName />

      
    </div>
  );
}


export default App;
