import React from 'react';
import shortid from 'shortid';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text : ""
        }
    }
    handleChange=(event)=> {
        this.setState({text: event.target.value});
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        this.props.add({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        this.setState({text: ""});
    }
    render() {
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input className="todo-input" value={this.state.text} onChange={this.handleChange} />
                <button  className="todo-button" type="submit">add todo</button>
            </form>
        )
    }
}