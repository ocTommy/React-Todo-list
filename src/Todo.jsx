const Todo = ({completed, title, description, deleteTodo}) => {
    return (
        <>
        <h3 className={completed ? 'green' : ''}>{title}</h3>
        {!completed && <h4 className="not-completed">{description}
        <button onClick={() => deleteTodo()}>Delete todo</button>
        </h4>}
        </>
    )
}

export default Todo;