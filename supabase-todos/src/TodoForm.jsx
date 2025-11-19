import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#FFFFFF");

  return (
    <form
      className="todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text, color);
        setText("");
      }}
    >
      <input
        className="todo-input"
        placeholder="Escribe una tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="priority-select"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="#FFFFFF">Blanco – Muy importante</option>
        <option value="#00FFFF">Celeste – Importante</option>
        <option value="#327DFF">Azul – Media importancia</option>
        <option value="#0028DB">Azul oscuro – No importante</option>
      </select>

      <button className="add-btn">Añadir</button>
    </form>
  );
}
