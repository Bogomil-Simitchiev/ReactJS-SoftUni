import { Component } from "react";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    '_id': 0,
                    'text': 'Todo 1'
                },
                {
                    '_id': 1,
                    'text': 'Todo 2'
                }
            ],
            newTask: ''
        }
    }

    onChangeHandler(e) {
        this.setState({
            newTask: e.target.value
        })
    }
    onSubmitHandler(e) {
        e.preventDefault();
        this.setState((state) => ({
            todos: [...state.todos, { '_id': Number([state.todos.length - 1]) + 1, 'text': state.newTask }],
            newTask: ''
        }))

    }
    deleteTask(todoId) {
        this.setState({
            todos: this.state.todos.filter(todo => todo._id !== todoId),
        })
    }
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <ul>
                    {this.state.todos.map(todo =>
                        <li key={todo._id}>{todo.text}  <button onClick={() => this.deleteTask(todo._id)}>X</button></li>
                    )}
                </ul>
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <input type="text" name="task" onChange={this.onChangeHandler.bind(this)} value={this.state.newTask} />
                    <input type="submit" />
                </form>
            </>
        )
    }
}

export default TaskList;