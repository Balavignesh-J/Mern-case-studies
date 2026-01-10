import Taglist from "./components/Taglist";
import TagInput from "./components/TagInput";
import { useCallback, useState } from "react";

const App = () => {
  console.log("App rendered");
  const [tags, setTags] = useState(["react", "angular", "vue", "svelte"]);
  const [filter, setFilter] = useState("");
  const [theme, setTheme] = useState(false);

  const handleAddTag = useCallback((newTag: string) => {
    setTags(prev => [...prev, newTag]);
  }, []);
  return (
    <div>
       <h2>Tag Manager</h2>

      <button onClick={() => setTheme(t => !t)}>
        Toggle Theme (unrelated state)
      </button>

      <p>Theme: {theme ? "Dark" : "Light"}</p>

      <TagInput onAddTag={handleAddTag} />

      <input
        placeholder="Filter tags"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />

      <Taglist tags={tags} filter={filter} />
    </div>
  )
}

export default App