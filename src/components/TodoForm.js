import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("")

    const handleSubmit =e=>{
        e.preventDefault();

        addTodo(value);

        setValue("")
    }
  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the tasks?"
      onChange={(e)=>setValue(e.target.value)}/>
      <Button variant="primary" className="todo-btn " onClick={handleSubmit}>ADD</Button>
    </form>
  );
};

export default TodoForm;
