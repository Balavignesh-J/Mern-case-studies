import React, { useMemo } from "react";

interface Props {
  tags: string[];
  filter: string;
}

const Taglist: React.FC<Props> = ({ tags, filter }) => {
  console.log("Tag List rendered");

  const filteredTags = useMemo(() => {
    console.log("Filtering tags...");
    return tags.filter(tag => tag.includes(filter));
  }, [tags, filter]);

  return (
    <ul>
      {filteredTags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};

export default React.memo(Taglist);