import React from "react";

function PoemItem({ poem, toggleReadStatus, deletePoem, toggleFavorite }) {
  return (
    <div className="poem-card">
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <button
        className={`read-toggle-btn ${poem.isRead ? "unread" : ""}`}
        onClick={() => toggleReadStatus(poem.id)}
      >
        {poem.isRead ? "Mark as Unread" : "Mark as Read"}
      </button>
      <button
        onClick={() => toggleFavorite(poem.id)}
        style={{ marginLeft: "10px" }}
      >
        {poem.isFavorite ? "Unfavorite" : "Favorite"}
      </button>
      <button
        onClick={() => deletePoem(poem.id)}
        className="delete-btn"
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default PoemItem;
