import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import PriorityScale from "./PriorityScale";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text, priorityColor) {
  const newTodo = {
    id: crypto.randomUUID(),
    text,
    done: false,
    color: priorityColor,
    date: new Date().toLocaleString(),   // ⭐ FECHA
  };
  setTodos([...todos, newTodo]);
}


  function toggleTodo(id) {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div className="app-container">
      <h1 className="title">Lista de Tareas</h1>

      <TodoForm onAdd={addTodo} />

      <div className="main-layout">
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

        <PriorityScale todos={todos} />
      </div>
    </div>
  );
}
