import React, { useState,useEffect,useRef } from "react";

function Todoform(props) {
  const [input, setinput] = useState(props.edit?props.edit.value:'');
  const handleChange=e=>{
      setinput(e.target.value);
  }
  const inputRef=useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  })
  const handlesubmit =e=>{
      e.preventDefault();
      props.onSubmit({
          id:Math.floor(Math.random()*10000),
          
          text:input
      });
      console.log(input)
      setinput('');
      
  }
  return (
    <form onSubmit={handlesubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handlesubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handlesubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
    
  );
}

export default Todoform;
