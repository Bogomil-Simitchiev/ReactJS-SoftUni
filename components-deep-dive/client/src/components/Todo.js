export const Todo = (props) => {
    let completedOrNot = 'task-status';

    if (props.isCompleted) {
        completedOrNot += ' completed';
    }
    return (
        <li className={completedOrNot}>
            <span className="task-title">{props.title}</span>
            <button onClick={() => props.onClickHandler(props.todo)}>{props.isCompleted ? 'Completed' : 'Incompleted'}</button>
        </li>
    )
}