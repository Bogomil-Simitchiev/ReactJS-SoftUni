const useTodosApi = () => {

    const removeTodo = (taskId) => {
        return fetch(`http://localhost:3030/jsonstore/todos/${taskId}`, {
            method: 'DELETE'
        }).then(res => res.json())

    }
    const createTodo = (newTodo) => {
        return fetch(`http://localhost:3030/jsonstore/todos`, {
            method: 'POST',
            body: JSON.stringify({ task: newTodo })
        }).then(res => res.json())

    }
    const editTodo = (taskId, updatedTodo) => {
        return fetch(`http://localhost:3030/jsonstore/todos/${taskId}`, {
            method: 'PUT',
            body: JSON.stringify({ task: updatedTodo, _id: taskId })
        }).then(res => res.json())

    }

    return {
        removeTodo,
        createTodo,
        editTodo
    }
}


export default useTodosApi;