import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filtered }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filtered.map((todo) => (
                    <Todo todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} todo={todo} />
                ))}
            </ul>

        </div>
    );
}

export default TodoList;