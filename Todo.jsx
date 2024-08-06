import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

function Todo(){
    let [todos , setTodos] = useState([{task:"sample task" , id:uuidv4() }]);
    let [newTodo , setNewTodo ] = useState("");
   
 let addNewTask =()=>{
    setTodos((prevTodos)=>{
        return[...prevTodos, {task: newTodo , id:uuidv4()}]
});
    setNewTodo(" ");
    };

    let deleteTodo=(id)=>{
       setTodos( todos.filter((todo)=> todo.id != id))
    }

let updateTodoValue = (event) =>{
    setNewTodo(event.target.value);


};
let touppercasee = ()=>{
    setTodos(
   todos.map((tod)=>{
    return{
        ...tod,
        task: tod.task.toUpperCase()
    };
  })    );

    };
    let singleuppercase=(id)=>{
        
         setTodos(
            todos.map((todo)=>{
                if(id===todo.id){
                return{
                    ...todo,
                    task: todo.task.toUpperCase()
                };}
                else{
                    return todo ;
                }
            })
         )    }

         let doneevt=(id)=>{
            setTodos(
                todos.map((todo)=>{
                    if(id === todo.id){

                    
              return{
                ...todo,
                task:"task done"
              }}
              else{
                return todo;
              }
                })
            )
         }
     return(<div>
    <input id="inputtab" placeholder="Task here " 
    value={newTodo} 
    onChange={updateTodoValue}></input>
    <br/>
    <button onClick={addNewTask}>add</button>
    <br/><br/><br/><br/>
    <ul>{
        todos.map((todo)=>(<>
            <li key = {todo.id}><span>{todo.task}</span> &nbsp; &nbsp; <button onClick={()=>deleteTodo(todo.id)}> DELETE </button> &nbsp; &nbsp; <button onClick={()=>singleuppercase(todo.id)}> Uppercase </button> &nbsp; &nbsp; <button onClick={ ()=>doneevt(todo.id)}> DONE </button>
            </li>
            </>))}
    </ul>
    <br/><br/>
    <button onClick={touppercasee}>Uppercase all</button>
    </div>);
    }
  export {Todo};
