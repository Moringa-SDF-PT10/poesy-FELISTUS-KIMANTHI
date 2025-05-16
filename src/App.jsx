import React, { useState, useEffect } from "react";
import PoemForm from "./components/PoemForm";
import PoemList from "./components/PoemList";
import "./index.css";

function App() {
  const [poems, setPoems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load from localStorage
  useEffect(() => {
    const storedPoems = localStorage.getItem("poems");
    if (storedPoems) setPoems(JSON.parse(storedPoems));

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("poems", JSON.stringify(poems));
  }, [poems]);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const addPoem = (poem) => {
    setPoems([
      ...poems,
      { ...poem, id: Date.now(), isRead: false, isFavorite: false },
    ]);
  };

  const deletePoem = (id) => {
    setPoems(poems.filter((poem) => poem.id !== id));
  };

  const toggleReadStatus = (id) => {
    setPoems(
      poems.map((poem) =>
        poem.id === id ? { ...poem, isRead: !poem.isRead } : poem
      )
    );
  };

  const toggleFavorite = (id) => {
    setPoems(
      poems.map((poem) =>
        poem.id === id ? { ...poem, isFavorite: !poem.isFavorite } : poem
      )
    );
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <h1>📜 Poem App</h1>
      <button onClick={toggleTheme} style={{ float: "right" }}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide" : "Show"} Poem Form
      </button>
      <PoemForm addPoem={addPoem} hidden={!showForm} />

      <h2>⭐ Favorite Poems ❣️</h2>
      <PoemList
        poems={poems.filter((p) => p.isFavorite)}
        toggleReadStatus={toggleReadStatus}
        deletePoem={deletePoem}
        toggleFavorite={toggleFavorite}
      />

      <h2>📚 All Poems</h2>
      <PoemList
        poems={poems}
        toggleReadStatus={toggleReadStatus}
        deletePoem={deletePoem}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;
