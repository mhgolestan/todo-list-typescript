import React from "react"
import { TodoListItem } from "./TodoListItem"

interface TodoListProps{
    todos: Todo[];
    toggleTodo: ToggleTodo;
    removeItem: RemoveItem;
}

export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, removeItem}) => {
    return(
        <ul>
            {todos.map(todo => (
                <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeItem={removeItem}/>
            ))}
        </ul>
    )

}