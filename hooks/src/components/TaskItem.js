import { useEffect } from "react";

const TaskItem = ({ task, removeTask }) => {
    useEffect(() => {
        console.log('Mount')

        return () => {
            console.log('Unmouting');
        }
    }, [])

    return (
        <li>{task.task} <button onClick={() => removeTask(task._id)}>X</button></li>
    )

}

export default TaskItem;