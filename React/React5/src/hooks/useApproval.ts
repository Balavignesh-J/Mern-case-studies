import { useState } from "react";

export function useApproval() {
  const [approved, setApproved] = useState(false);

  function approve() {
    setApproved(true);
  }

  return { approved, approve };
}