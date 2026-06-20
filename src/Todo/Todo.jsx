import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function Todo() {
  const [todos, setTodos] = useState([{ id: uuid(), text: "" }]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, { id: uuid(), text: inputValue }]);
      setInputValue("");
    }
  };
  const Update = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddTodo();
  };

  const DeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

 const UpdateTodo = (id, currentText) => {
    const newText = prompt("Update Todo", currentText);
    if (newText !== null && newText.trim() !== "") {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo,
        ),
      );
    }
  };

  let allUpperCase = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, text: todo.text.toUpperCase() }))
    );
  };
  //
    const ToggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };
  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Add Todo"
        value={inputValue}
        onChange={Update}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
                   <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => ToggleDone(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                opacity: todo.done ? 0.6 : 1,
                margin: "0 8px",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => DeleteTodo(todo.id)}>Delete</button>

            <button onClick={() => UpdateTodo(todo.id, todo.text)}>
              Update
            </button>
          </li>
        ))}
      </ul>
          <button onClick={allUpperCase}>All UpperCase</button>
    </>
  );
}
export default Todo;
