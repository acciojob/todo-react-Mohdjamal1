
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[text,setText] = useState("");
  const[todos,setTodos] =useState([]);
  function addTodo(){
    if(text.trim() !== ""){
      setTodos([...todos,text])
      setText("");
    }
  }
  function deleteTodo(id){
    setTodos(todos.filter((item,index)=> index !== id));
  }
  return (
    <div>
        <h1>To-Do List</h1>
        <input value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos && todos.map((item,index)=>(
            <li key={index}>
              {item}
              <button onClick={()=>deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App
