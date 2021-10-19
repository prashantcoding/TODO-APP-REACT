import React,{useState} from 'react'
import Todoform from '../component/Todoform'
import Todo from './Todo'

function Todolist() {
    const [todos, settodos] = useState([])
    const addTodo=todo=>{
        if(!todo.text|| /^\s*$/.test(todo.text)){
            console.log("add todo return condition")
            return;
        }
        const newTodos = [todo,...todos]
        settodos(newTodos)
        console.log(...todos);
    }
    const completeTodo=id=>{
        let updatedTodos =todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        })
        settodos(updatedTodos)
    }
    const removeTodo=id=>{
        const removeArr=[...todos].filter(todo=>todo.id!==id )
        settodos(removeArr);
    }
    const editTodo=(todoId,newValue)=>{
        if(!newValue|| /^\s*$/.test(newValue)){
            return;
        }
        settodos(prev=>prev.map(item=>(item.id===todoId?newValue:item)))
        
    }
    return (
        <div>
            <h1>Whats the plan for today</h1>
            <Todoform onSubmit={addTodo}/>
            <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}/>
        </div>
    )
}

export default Todolist
