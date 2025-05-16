import React from "react";
import PoemItem from "./PoemItem";

function PoemList({ poems, toggleReadStatus, deletePoem, toggleFavorite }) {
  return (
    <div className="poem-list">
      {poems.length === 0 ? (
        <p>No poems yet.</p>
      ) : (
        poems.map((poem) => (
          <PoemItem
            key={poem.id}
            poem={poem}
            toggleReadStatus={toggleReadStatus}
            deletePoem={deletePoem}
            toggleFavorite={toggleFavorite}
          />
        ))
      )}
    </div>
  );
}

export default PoemList;
