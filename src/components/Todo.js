import React from 'react';

const Todo = (props) => (
    <li className="todo">
        <span style = {{textDecoration: props.complete ? "line-through" : ""}}
        key={props.id}>
        {props.text}
        </span>
        <button className="todo-button"
        onClick={()=> props.toggle(props.id)}>{props.complete? "active" : "done" }</button>
        <button className="todo-button" 
        onClick={()=> props.delete(props.id)}>delete</button>
    </li>
)

export default Todo;