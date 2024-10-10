import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

function NoteList({ notes }) {
  return (
    <nav className="noteList">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <Link to={`notes/${note.id}`}>{note.title}</Link>
          <p className="contentExerpt">
            {note.content.substring(0, 20) + "..."}
          </p>
        </div>
      ))}
    </nav>
  );
}

export default NoteList;
