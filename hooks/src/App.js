import { useState } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([
        { _id: 1, task: 'first...' },
        { _id: 2, task: 'second...' }
    ]);

    const addTask = (task) => {
        setTasks(state => [...state, {
            _id: state[state.length - 1]?._id + 1 || 1,
            task
        }]);
    }

    const removeTask = (taskId) => {
        setTasks(state => state.filter(t => t._id !== taskId));
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