import Todo from "./Todo";

const Todolist = ({todos, deleteTodo}) => {
    return ( 
        <>
        {todos.map ((todo) =>(
            <>
            <Todo {...todo}
            deleteTodo={deleteTodo}/>
            </>
        ))}
        </>
     );
}
 
export default Todolist;