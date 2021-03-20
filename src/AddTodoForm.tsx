import React, { useState } from "react"

interface Props{
    addTodo: AddTodo
}
export const AddTodoForm :React.FC<Props> = ({addTodo}) =>{
    const [content, setContent] = useState('')
    return(
        <form>
            <input type="text" value={content} onChange={(event) => {setContent(event.target.value)}}/>
            <button type="submit" onClick={event => {event.preventDefault(); addTodo(content); setContent('')}}>Add Todo</button>
        </form>
    )
}