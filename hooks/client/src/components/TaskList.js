import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map(t => <TaskItem key={t._id} currentTask={t} />)}
        </ul>
    )

}

export default TaskList;