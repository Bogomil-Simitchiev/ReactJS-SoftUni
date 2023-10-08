import { useEffect, useState } from 'react'
import { Todo } from './Todo';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(data.todos);
            })
            .catch(err => console.log(err))
    }, [])

    const changeStatusHandler = (todo) => {
        const currentTodo = todos.find(oldTodo => oldTodo._id === todo._id);
        currentTodo.isCompleted = !currentTodo.isCompleted;
        console.log(currentTodo)
        setTodos(oldTodos => oldTodos.map(todo => todo._id === currentTodo._id ? currentTodo : todo))
    }

    return (
        <ul id="taskList">
            {!todos.length && 'Loading'}
            {todos.map(todo => <Todo key={todo._id} {...todo} onClickHandler={() => changeStatusHandler(todo)} />)}
        </ul>
    )
}