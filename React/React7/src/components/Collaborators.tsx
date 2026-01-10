import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCollaborators } from "../api/collaborators";
import { useCollaboratorStore } from "../store/collaboratorStore";

export function Collaborators() {
  const collaborators = useCollaboratorStore((s) => s.collaborators);
  const setCollaborators = useCollaboratorStore((s) => s.setCollaborators);

  const { data, isLoading, error } = useQuery({
    queryKey: ["collaborators"],
    queryFn: fetchCollaborators,
  });

  useEffect(() => {
    if (data) {
      setCollaborators(data);
    }
  }, [data, setCollaborators]);

  if (isLoading) return <p>Loading collaborators...</p>;
  if (error) return <p>Error loading collaborators</p>;

  return (
    <div>
      <h3>Team Members</h3>
      <ul>
        {collaborators.map((c) => (
          <li key={c.id}>
            {c.name} – {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
}