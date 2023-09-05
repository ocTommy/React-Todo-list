
const Newtodo = ({addTodo}) => {
    return (
        <>
        <h2>New todo</h2>
        <input placeholder="title" id="todoTitle"></input>
        <input placeholder="description" id="todoDesc"></input>
        <button className="todo-btn" onClick={addTodo}>add todo</button>
        </>
    );
}
 
export default Newtodo;