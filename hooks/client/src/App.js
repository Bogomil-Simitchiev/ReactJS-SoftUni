import './App.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import TaskContext from './contexts/TaskContext';
import useFetch from './hooks/useFetch';
import useTodosApi from './hooks/useTodosApi';

function App() {
    const [tasks, setTasks] = useFetch('http://localhost:3030/jsonstore/todos', []);
    const { removeTodo, createTodo, editTodo } = useTodosApi();

    const addTask = (task) => {

        createTodo(task).then(result => {

            setTasks(state => [...state, {
                _id: result._id,
                task
            }]);
        })
    }

    const removeTask = (taskId) => {
        removeTodo(taskId).then(result => {
            setTasks(state => state.filter(t => t._id !== taskId));
        })
    }

    const editTask = (taskId, updatedTodo) => {
        editTodo(taskId, updatedTodo).then(result => {
            setTasks(state => state.map(todo => todo._id === taskId ? result : todo));

        })

    }

    return (
        <TaskContext.Provider value={{
            removeTask,
            addTask,
            editTask

        }}>
            <div className="App">
                <header className="App-header">
                    <h1>Todo App</h1>
                    <TaskList tasks={tasks} />
                    <CreateTask />
                </header>
            </div>
        </TaskContext.Provider>
    );
}

export default App;