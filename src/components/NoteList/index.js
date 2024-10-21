import { useNotes, useNotesDispatch } from "../../contexts/NoteContext";
import "./style.css";

function NoteList() {
  const notes = useNotes();
  const dispatch = useNotesDispatch();

  return (
    <div className="noteList">
      {notes.map((note) => (
        <p key={note.id}>
          {note.note}{" "}
          <button
            onClick={() => dispatch({ type: "delete", id: note.id })}
            className="deleteBtn"
          >
            删除
          </button>
        </p>
      ))}
    </div>
  );
}

export default NoteList;
