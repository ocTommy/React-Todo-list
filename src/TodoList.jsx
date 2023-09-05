import Todo from "./Todo";

const Todolist = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          id={index}
          {...todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default Todolist;