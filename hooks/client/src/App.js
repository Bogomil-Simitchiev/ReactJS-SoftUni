import './App.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import useFetch from './hooks/useFetch';
import useTodosApi from './hooks/useTodosApi';

function App() {
    const [tasks, setTasks] = useFetch('http://localhost:3030/jsonstore/todos', []);
    const { removeTodo } = useTodosApi();

    const addTask = (task) => {
        setTasks(state => [...state, {
            _id: state[state.length - 1]?._id + 1 || 1,
            task
        }]);
    }

    const removeTask = (taskId) => {
        removeTodo(taskId).then(result => {
            setTasks(state => state.filter(t => t._id !== taskId));
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo App</h1>
                <TaskList tasks={tasks} removeTask={removeTask} />
                <CreateTask addTask={addTask} />
            </header>
        </div>
    );
}

export default App;