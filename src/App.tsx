import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { TodoList } from "./TodoList"
import {AddTodoForm} from "./AddTodoForm"
import './App.css';

const initialTodos : Todo[] = [
  {
    id: "1",
    content: 'HTML is easy',
    date:  '2019-05-30T17:30:31.098Z',
    completed: true
  },
  {
    id: "2",
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    completed: false
  },
  {
    id: "3",
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    completed: true
  }
]

const App = () => {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const removeItem = (selectedTodo: Todo) => {
    const filteredTodos = todos.filter(todo => todo.id !== selectedTodo.id)
    setTodos(filteredTodos)
    console.log(filteredTodos);
  }

  const addTodo: AddTodo = (content: string) => {
    const newTodo = { 
      id: uuidv4(),
      content: content, 
      date: new Date().toISOString(),
      completed: false 
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeItem={removeItem}/> 
      <AddTodoForm addTodo={addTodo}/>
    </>
    )
}

export default App;
