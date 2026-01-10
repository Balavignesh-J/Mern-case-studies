import type { Collaborator } from "../store/collaboratorStore";

export async function fetchCollaborators(): Promise<Collaborator[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return data.map((u: any) => ({
    id: String(u.id),
    name: u.name,
    email: u.email,
  }));
}