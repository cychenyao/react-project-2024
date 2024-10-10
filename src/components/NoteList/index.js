import React from "react";
import "./style.css";

function NoteList({ notes }) {
  return (
    <nav className="noteList">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <a href={`notes/${note.id}`}>{note.title}</a>
          <p className="contentExerpt">
            {note.content.substring(0, 20) + "..."}
          </p>
        </div>
      ))}
    </nav>
  );
}

export default NoteList;
