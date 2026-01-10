import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { createUserSlice } from "./slices/userSlice";
import { createFileSlice } from "./slices/fileSlice";
import { createCommentSlice } from "./slices/commentSlice";
import { createNotificationsSlice } from "./slices/notificationsSlice";
import type { UserSlice } from "./slices/userSlice";
import type { FileSlice } from "./slices/fileSlice";
import type { CommentSlice } from "./slices/commentSlice";
import type { NotificationsSlice } from "./slices/notificationsSlice";

export type DesignHubStore =
  & UserSlice
  & FileSlice
  & CommentSlice
  & NotificationsSlice;

export const useDesignHubStore = create<DesignHubStore>()(
  devtools(
    persist(
      (set) => ({
        ...createUserSlice(set),
        ...createFileSlice(set),
        ...createCommentSlice(set),
        ...createNotificationsSlice(set),
      }),
      { name: "designhub-store" }
    )
  )
);