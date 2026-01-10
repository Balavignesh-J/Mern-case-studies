import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

type Role = "admin" | "user";

interface SessionState {
  userId: string;
  token: string;
  expiresAt: number;
  role: Role;

  setSession: (userId: string, token: string, expiresAt: number, role?: Role) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionState>()(
  devtools(
    persist(
      (set) => ({
        userId: "",
        token: "",
        expiresAt: 0,
        role: "user",

        setSession: (userId, token, expiresAt, role = "user") =>
          set({ userId, token, expiresAt, role }),

        clearSession: () =>
          set({ userId: "", token: "", expiresAt: 0, role: "user" }),
      }),
      {
        name: "collabnotes-session",
        storage: createJSONStorage(() => localStorage),

        partialize: (state) => ({
          userId: state.userId,
          token: state.token,
          role: state.role,
        }),

        version: 2,

        migrate: (persisted: any, version) => {
          if (version < 2) {
            return {
              ...persisted,
              role: "user",
            };
          }
          return persisted;
        },
      }
    )
  )
);