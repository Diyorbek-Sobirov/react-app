import "./TodoItem.scss"

function TodoItem({ todo, onDelete, isCompleted  = true}) {
    return <div className="todoItem">
        <input className="todoItem__check" type="checkbox" />
        <h3 className="todoItem__title">{todo.id}|{todo.title} | { isCompleted ? "Bajarilgan" : "Bajarilmagan"} </h3>
        <button onClick={()=>{ onDelete(todo.id) }} className="todoItem__btn">delete</button>
    </div>
}

export default TodoItem