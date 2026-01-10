import { useState } from "react";
import useNotification from "./store/useNotification";

const App = () => {
  const { msg, markAsRead, addNotification,clearNotifications } = useNotification();

  const [notification, setNotification] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!notification.trim()) return;

    addNotification(notification, "info");
    setNotification("");
  }

  return (
    <div style={{ maxWidth: 400 }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={notification}
          onChange={(e) => setNotification(e.target.value)}
        />

        <button type="submit">Add Notification</button>
      </form>

      <h3>Notifications</h3>

      {msg.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul>
          {msg.map((n) => (
            <li
              key={n.id}
              style={{
                padding: "10px",
                marginBottom: "8px",
                border: "1px solid #ddd",
                borderLeft: `5px solid ${
                  n.read
                    ? "green"
                    : "Red"
                }`,
              }}
            >
              <div style={{ fontWeight: 600 }}>{n.message}</div>

              <button
                onClick={() => markAsRead(n.id)}
                style={{ marginTop: "6px", fontSize: "12px" }}
              >
                Mark as read
              </button>
              <button
                onClick={() => clearNotifications(n.id)}
                style={{ marginTop: "6px", fontSize: "12px" }}
              >
                Clear Notification
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;