import { useHistoryStore } from "../store/historyStore";

export function HistoryPanel() {
  const history = useHistoryStore((s) => s.history);
  const clear = useHistoryStore((s) => s.clearHistory);

  return (
    <div>
      <h3>Note History</h3>
      <button onClick={clear}>Clear</button>

      <ul>
        {history.map((h, i) => (
          <li key={i}>
            {h.noteId} — {h.action} —{" "}
            {new Date(h.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}