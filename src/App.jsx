import styles from "./styles.css"
import { useState } from "react";
import TodoList from "./TodoList"
import Newtodo from "./Newtodo";


export default function App() {

  const [todos, setTodos] = useState(

    [
      {
        title: "Todo #1",
        description: "Complete the project proposal",
        completed: false,
      },
      {
        title: "Todo #2",
        description: "Prepare for the upcoming meeting",
        completed: false,
      },
      {
        title: "Todo #3",
        description: "Buy groceries for the week",
        completed: true,
      },
      {
        title: "Todo #4",
        description: "Call the client to discuss the project",
        completed: false,
      },
      {
        title: "Todo #5",
        description: "Practice playing the guitar",
        completed: true,
      },
      {
        title: "Todo #6",
        description: "Write an article for the blog",
        completed: false,
      },
      {
        title: "Todo #7",
        description: "Plan the weekend trip",
        completed: false,
      },
      {
        title: "Todo #8",
        description: "Review the latest design draft",
        completed: true,
      },
      {
        title: "Todo #9",
        description: "Exercise for 30 minutes",
        completed: false,
      },
      {
        title: "Todo #10",
        description: "Research new programming techniques",
        completed: false,
      },
    ]
  );

 const addTodo = () => {
    console.log("adding todo")

    let todoTitle = document.querySelector("#todoTitle").value
    let todoDescription = document.querySelector("#todoDesc").value

    let newTodo = {
      title: todoTitle,
      description: todoDescription,
      completed:false,
    }
    
    setTodos([...todos, newTodo])

    todoTitle.value = "";
    todoDescription.value = "";

  }

  const deleteTodo = (id) => {
    console.log("deleting todo")
    let newTodos = todos.filter((todo, index) => index !== id);
    setTodos(newTodos);
  }
   

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Newtodo addTodo={addTodo}/>
      <TodoList 
      todos={todos}
      deleteTodo={deleteTodo}
      />
    </div>
  );
}
