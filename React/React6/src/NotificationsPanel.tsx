import { useDesignHubStore } from "./store/useDesignHubStore";
import { useMemo } from "react";

export const NotificationsPanel = () => {
  const notifications = useDesignHubStore((s) => s.notifications);
  const markAsRead = useDesignHubStore((s) => s.markAsRead);
  const addNotification = useDesignHubStore((s) => s.addNotification);

  const unread = useMemo(
    () => notifications.filter((n) => !n.read),
    [notifications]
  );

  return (
    <div>
      <button onClick={() => addNotification("New file shared")}>
        Add Notification
      </button>

      {unread.length === 0 && <p>No unread notifications</p>}

      <ul>
        {unread.map((n) => (
          <li key={n.id}>
            {n.message}
            <button onClick={() => markAsRead(n.id)}>Mark as read</button>
          </li>
        ))}
      </ul>
    </div>
  );
};