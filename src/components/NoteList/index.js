import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

function NoteList({ notes }) {
  console.log("!!!!" + notes)
  return (
    notes && notes.length > 0 && <nav className="noteList">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <NavLink
            to={`notes/${note.id}`}
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            {note.title}
          </NavLink>
          <p className="contentExerpt">
            {note.content.substring(0, 20) + "..."}
          </p>
        </div>
      ))}
    </nav>
  );
}

export default NoteList;
