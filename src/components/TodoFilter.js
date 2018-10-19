import React from 'react';

const TodoFilter = (props) => (
    <div>
        <button className="todo-button" onClick={()=> props.toggle("all")}>all</button>
        <button className="todo-button" onClick={()=> props.toggle("active")}>active</button>
        <button className="todo-button" onClick={()=> props.toggle("completed")}>completed</button>
    </div>
);

export default TodoFilter;