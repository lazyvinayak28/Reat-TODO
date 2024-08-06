import { useState } from "react";
function Todo (){
    let [ todos , setTodos  ] = useState(["sample Todo task"]);
    let[task , setTask ] = useState("");
    let updatetodos=()=>{
   setTodos([...todos , task]);
   setTask("");
    }
    let updatetask = (evt)=>{
    setTask(evt.target.value);
    
    }
    return(<>
    <h3>Todo List Maker</h3>
    <input value={task} onChange={updatetask} ></input>
    <button onClick={updatetodos}>click here</button>
    <ul>{todos.map((todo) => (
            <li>{todo}</li>
        ) )
    }</ul>
    </>)
}
export {Todo};