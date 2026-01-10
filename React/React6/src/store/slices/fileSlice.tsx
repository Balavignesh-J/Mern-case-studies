export interface File {
  id: string;
  name: string;
  content: string;
}

export interface FileSlice {
  files: File[];
  addFile: (file: File) => void;
}

export const createFileSlice = (set: any) => ({
  files: [],
  addFile: (file: File) =>
    set((state: any) => ({ files: [...state.files, file] })),
});