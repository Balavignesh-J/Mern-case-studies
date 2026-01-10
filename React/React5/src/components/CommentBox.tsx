import { useState } from "react";

interface CommentBoxProps {
  onPost: (comment: string) => void;
}

export function CommentBox({ onPost }: CommentBoxProps) {
  const [text, setText] = useState("");

  function handlePost() {
    onPost(text);
    setText("");
  }

  return (
    <div>
      <input
        placeholder="Write a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}