import React, { useState, useEffect } from "react";
import './App.css';
//Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getFromLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFiltered(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFiltered(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  }

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getFromLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let data = JSON.parse(localStorage.getItem("todos"));
      setTodos(data);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Tasks</h1>
      </header>
      <Form
        inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
    </div>
  );
}

export default App;
