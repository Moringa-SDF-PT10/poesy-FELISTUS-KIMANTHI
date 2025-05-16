import React, { useState } from "react";

function PoemForm({ addPoem, hidden }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    addPoem({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form
      className={`poem-form ${hidden ? "hidden" : ""}`}
      onSubmit={handleSubmit}
    >
      <h2>Create a New Poem</h2>
      <input
        type="text"
        placeholder="Poem Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Poem Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Poem</button>
    </form>
  );
}

export default PoemForm;
