import { create } from "zustand";

export interface Collaborator {
  id: string;
  name: string;
  email: string;
}

interface CollaboratorState {
  collaborators: Collaborator[];
  setCollaborators: (data: Collaborator[]) => void;
}

export const useCollaboratorStore = create<CollaboratorState>((set) => ({
  collaborators: [],
  setCollaborators: (data) => set({ collaborators: data }),
}));