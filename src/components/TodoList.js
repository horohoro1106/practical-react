import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import TodoFilter from './TodoFilter';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            todos: [],
            todosToShow: "all",
            allComplete: true
        }
    }
    addTodo=todo=> {
        this.setState((state)=>({ todos: [todo,...state.todos]}));
    }
    toggleComplete=id=> {
        let todos = this.state.todos.map(todo=> {
            if(todo.id===id) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }
            else {
                return todo;
            }
        })
        this.setState({ todos })
    }
    deleteTodo=id=> {
        this.setState((state)=>({todos: state.todos.filter(todo=> todo.id !== id)}));
    }
    toggleShow=string=> {
        this.setState({todosToShow: string});
    }
    toggleAllComplete=()=> {
        let todos = this.state.todos.map(todo=> ({...todo,complete: this.state.allComplete}));
        this.setState((state)=>({todos, allComplete: !state.allComplete}));
    }
    deleteAllCompleted=()=> {
        let todos = this.state.todos.filter(todo=> !todo.complete );
        this.setState({ todos });
    }
    render() {
        let todos = this.state.todosToShow === "all" 
        ? this.state.todos : this.state.todosToShow === "active"
        ? this.state.todos.filter(todo=> !todo.complete)
        : this.state.todos.filter(todo=> todo.complete)
        let anyCompleted = this.state.todos.some(todo=> todo.complete);

        return (
            <div className="todoList">
                <h3 className="todoList-header">Todo list app</h3>
                <TodoForm add={this.addTodo} />
                <TodoFilter toggle={this.toggleShow} />
                <button className="todo-button" onClick={this.toggleAllComplete}>Toggle all to {this.state.allComplete ? "completed" : "active"}</button>
                <ul>
                {todos.map(todo=> <Todo
                id={todo.id}
                text={todo.text} 
                toggle={this.toggleComplete} 
                complete={todo.complete}
                delete={this.deleteTodo}  />)}
                </ul>
                {anyCompleted 
                ? (<button className="todo-button" onClick={this.deleteAllCompleted}>Delete all completed</button>)
                : null}
            </div>
        )
    }
}