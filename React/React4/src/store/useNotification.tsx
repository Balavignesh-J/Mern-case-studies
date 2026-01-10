import { create } from "zustand";
import { persist } from "zustand/middleware";

type notify = "info" | "error" | "success";
interface Message {
  id: number;
  message: string;
  type: notify;
  read: boolean;
}

interface Notificationstore {
  msg: Message[];
  nextId: number;
  addNotification: (title: string, type: notify) => void;
  markAsRead: (id: number) => void;
  clearNotifications: (id: number) => void;
}

const useNotification = create<Notificationstore>()(
  persist(
    (set) => ({
      msg: [],
      nextId: 1,

      addNotification: (title, type) =>
        set((state) => ({
          msg: [
            ...state.msg,
            { id: state.nextId, message: title, type, read: false },
          ],
          nextId: state.nextId + 1,
        })),

      markAsRead: (id) =>
        set((state) => ({
          msg: state.msg.map((m) => (m.id === id ? { ...m, read: !m.read } : m)),
        })),

      clearNotifications: (id) =>
        set((state) => ({
          msg: state.msg.filter((m) => m.id !== id),
        })),
    }),
    {
      name: "notification-storage",
    }
  )
);

export default useNotification;
