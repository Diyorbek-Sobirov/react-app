import "./TodoList.scss"
import TodoItem from "../TodoItem/TodoItem"
import { useState } from "react"
function TodoList() {
    const data = [
        {id:1, title:"O'qishga boraman", isCompleted:true},
        {id:2, title:"5 olaman", isCompleted:false},
        {id:3, title:"3 olaman", isCompleted:false},
        {id:4, title:"Kantrakt to'layman", isCompleted:false},
        {id:5, title:"5 olaman", isCompleted:false},
    ]
    const [todos, setTodos] = useState(data)
    const handleDelete = (id) => {
        setTodos(state => state.filter(item => item.id !== id))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        let todoInputEl = document.querySelector('#todo-input')
        const lastEl = todos[todos.length-1] || {id:0}
        const data = {
            id:lastEl?.id+1,
            title: todoInputEl.value,
            isCompleted:false
        }
        todoInputEl.value = ""
        console.log(data)
        setTodos(state=>[...state, data])
    }

    return <div className="todolist">
        <h2>Todo app </h2>
        <form onSubmit={handleSubmit}>
            <input id="todo-input" type="text" />
            <button type="submit">add</button>
        </form>
        {
            todos.length <=0 ? "Todos Not Found" : todos.map((element, index) => {
                return <TodoItem key={index} onDelete={handleDelete} isCompleted={element.isCompleted} todo={element} />
            })
        }
    </div>
}

export default TodoList