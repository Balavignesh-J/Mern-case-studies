import { Collaborators } from "./components/Collaborators";
import { HistoryPanel } from "./components/HistoryPanel";
import { useHistoryStore } from "./store/historyStore";
import { useSessionStore } from "./store/sessionStore";

export default function App() {
  const addHistory = useHistoryStore((s) => s.addHistoryEntry);
  const session = useSessionStore();

  return (
    <div style={{ padding: 20 }}>
      <h1>CollabNotes Control Center</h1>

      <button
        onClick={() =>
          session.setSession("u123", "token_xyz", Date.now() + 3600000, "admin")
        }
      >
        Login
      </button>

      <p>User: {session.userId}</p>
      <p>Role: {session.role}</p>

      <button onClick={() => addHistory("note-1", "edited")}>
        Simulate Note Edit
      </button>

      <HistoryPanel />
      <Collaborators />
    </div>
  );
}