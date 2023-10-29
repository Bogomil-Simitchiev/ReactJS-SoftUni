const useTodosApi = () => {

    const removeTodo = (taskId) => {
        return fetch(`http://localhost:3030/jsonstore/todos/${taskId}`, {
            method: 'DELETE'
        }).then(res => res.json())

    }

    return {
        removeTodo
    }
}


export default useTodosApi;