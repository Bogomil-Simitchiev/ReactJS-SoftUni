import TaskItem from "./TaskItem";

const TaskList = ({ tasks, removeTask }) => {
    return (
        <ul>
            {tasks.map(t => <TaskItem key={t._id} task={t} removeTask={removeTask} />)}
        </ul>
    )

}

export default TaskList;