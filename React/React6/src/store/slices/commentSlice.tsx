export interface Comment {
  id: string;
  fileId: string;
  author: string;
  text: string;
}

export interface CommentSlice {
  comments: Comment[];
  addComment: (c: Comment) => void;
}

export const createCommentSlice = (set: any) => ({
  comments: [],
  addComment: (c: Comment) =>
    set((state: any) => ({ comments: [...state.comments, c] })),
});