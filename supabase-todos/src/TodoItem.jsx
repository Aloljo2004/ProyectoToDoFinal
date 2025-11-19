export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />

      <span
        className="todo-text"
        style={{
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      {/* ⭐ FECHA AÑADIDA */}
      <span className="todo-date">{todo.date}</span>

      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        X
      </button>
    </li>
  );
}
