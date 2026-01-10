export interface Notification {
  id: string;
  message: string;
  read: boolean;
}

export interface NotificationsSlice {
  notifications: Notification[];
  addNotification: (msg: string) => void;
  markAsRead: (id: string) => void;
  clearNotifications: () => void;
}

export const createNotificationsSlice = (set: any) => ({
  notifications: [],

  addNotification: (msg: string) =>
    set((state: any) => ({
      notifications: [
        ...state.notifications,
        { id: crypto.randomUUID(), message: msg, read: false },
      ],
    })),

  markAsRead: (id: string) =>
    set((state: any) => ({
      notifications: state.notifications.map((n: any) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),

  clearNotifications: () => set({ notifications: [] }),
});