import { useState } from "react";

const CreateTask = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [error, setError] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        // TODO: push task to tasks in the tasklist
        if (task !== '') {
            addTask(task);
            setError('');
            setTask(state => state = '');

        } else {
            setError('Cannot be empty space!');
            setTask(state => state = '');
        }
    }

    const changeHandler = (e) => {
        setTask(state => state = e.target.value);
    }

    return (
        <form onSubmit={submitHandler}>

            <input type="text" placeholder='Some task here' value={task} onChange={changeHandler} />
            <input type="submit" value='Add task' />
            {error && <span>Cannot be empty space!</span>}
        </form>
    )

}

export default CreateTask;