import { useEffect, useState } from 'react'
import { Todo } from './Todo';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(data => {
                console.log(Object.values(data));
                setTodos(Object.values(data));
            })
            .catch(err => console.log(err))
    }, [])

    const changeStatusHandler = (todo) => {
        fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted })
        })
            .then(res => res.json())
            .then(() => {
                const currentTodo = todos.find(oldTodo => oldTodo._id === todo._id);
                currentTodo.isCompleted = !currentTodo.isCompleted;
                console.log(currentTodo)
                setTodos(oldTodos => oldTodos.map(todo => todo._id === currentTodo._id ? currentTodo : todo))
            })
            .catch(err => console.log(err))

    }

    return (
        <ul id="taskList">
            {!todos.length && 'Loading'}
            {todos.map(todo => <Todo key={todo._id} {...todo} todo={todo} onClickHandler={changeStatusHandler} />)}
        </ul>
    )
}