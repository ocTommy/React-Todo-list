const Todo = ({ completed, title, description, id, deleteTodo }) => {
    return (
      <>
        <h3 className={completed ? 'green' : ''}>{title}</h3>
        {!completed && (
          <h4 className="not-completed">
            {description}
            <button className="todo-btn" onClick={() => deleteTodo(id)}>Delete todo</button>
          </h4>
        )}
      </>
    );
  };
  
  export default Todo;