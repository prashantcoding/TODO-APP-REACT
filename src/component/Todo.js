import React, { useState } from "react";

import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Todoform from "./Todoform";

function Todo({ todos, completeTodo,removeTodo,editTodo}) {
  const [edit, setedit] = useState({
    id: null,
    value: ''
  });
  const submitUpdate=value=>{
      editTodo(edit.id,value)
      setedit({
          id:null,
          value:''
      })
  }
  if(edit.id){
      return <Todoform edit={edit} onSubmit={submitUpdate}/>
  }
  return todos.map((todo, index) => (
    <div
      className={todo.iscomplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="delete-icon">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
        <TiEdit
          className="edit-icon"
          onClick={() => setedit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
}

export default Todo;
