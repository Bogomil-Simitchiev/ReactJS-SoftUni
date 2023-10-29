import { useContext, useEffect, useState } from "react";
import TaskContext from "../contexts/TaskContext";

const TaskItem = ({ currentTask }) => {
    const { removeTask, editTask } = useContext(TaskContext);
    const [changeView, setChangeView] = useState(false);
    const [editedTask, setEditedTask] = useState(currentTask.task);

    const changeHandler = (e) => {
        setEditedTask(state => state = e.target.value);
    }

    useEffect(() => {
        console.log('Mount')

        return () => {
            console.log('Unmouting');
        }
    }, [])

    return (
        <li>

            {changeView ?

                <>
                    <input type="text" name="task" defaultValue={currentTask.task} onChange={changeHandler} />
                    <button onClick={() => removeTask(currentTask._id)}>X</button>
                    <button onClick={() => {
                        editTask(currentTask._id, editedTask);
                        setChangeView(state => !state);
                    }}>
                        Edit
                    </button>
                </>
                :
                <>
                    <span>{currentTask.task}</span>
                    <button onClick={() => removeTask(currentTask._id)}>X</button>
                    <button onClick={() => setChangeView(state => !state)}>Edit</button>
                </>
            }
        </li>
    )

}

export default TaskItem;