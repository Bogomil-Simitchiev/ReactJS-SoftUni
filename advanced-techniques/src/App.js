import './App.css';
import { Component } from 'react';
import TaskList from './components/TaskList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <TaskList title={'Todo app'}/>
                </div>
            </div>
        )
    }
}

export default App;