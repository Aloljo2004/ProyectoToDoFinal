export default function PriorityScale({ todos }) {
  const sorted = [...todos].sort(
    (a, b) => brightness(b.color) - brightness(a.color)
  );

  return (
    <div className="priority-scale-container">
      <h2>Lista</h2>

      <ul className="priority-scale-list">
        {sorted.map((t) => (
          <li key={t.id} className="priority-scale-item">

            <div
              className="priority-block"
              style={{
                backgroundColor: t.done ? "limegreen" : t.color,
                boxShadow: t.done ? "0 0 10px limegreen" : "none",
              }}
            ></div>

            <span>{t.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function brightness(hex) {
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  return (r + g + b) / 3;
}
