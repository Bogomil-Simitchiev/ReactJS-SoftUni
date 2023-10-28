const TaskList = ({ tasks }) => {

    return (
        <ul>
            {tasks.map(t => <li key={t._id}>{t.task}</li>)}
        </ul>
    )

}

export default TaskList;