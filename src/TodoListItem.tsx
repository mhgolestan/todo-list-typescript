import React from "react"

interface TodoListItemProps {
    todo: Todo,
    toggleTodo: ToggleTodo,
    removeItem: RemoveItem
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo, removeItem}) => {
    return(
        <li>
            {todo.content} 
            <button onClick={() => toggleTodo(todo)}>{todo.completed ? "true" : "false"}</button>
            <button onClick={() => removeItem(todo)}>Remove</button>
        </li>
    ) 
}