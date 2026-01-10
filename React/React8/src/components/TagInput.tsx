import React, { useState } from "react";

interface Props {
  onAddTag: (tag: string) => void;
}

const TagInput: React.FC<Props> = ({ onAddTag }) => {
  console.log("Taginput rendered");

  const [value, setValue] = useState("");

  return (
    <div>
      <input
        placeholder="Add tag"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (value.trim()) {
            onAddTag(value);
            setValue("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default React.memo(TagInput);