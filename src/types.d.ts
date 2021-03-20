interface Todo {
    id: string,
    content: string,
    date: string,
    completed: boolean,
    // dueDate: string
}

type ToggleTodo = (selectedTodo: Todo) => void

type RemoveItem = (selectedTodo: Todo) => void

type AddTodo = (content: string) => void
