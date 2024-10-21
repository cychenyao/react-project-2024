import React, { useState } from "react";
import { useNotesDispatch } from "../../contexts/NoteContext";

let noteId = 0;

function AddNote() {
  const [note, setNote] = useState("");
  const dispatch = useNotesDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="输入笔记内容"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button
        onClick={() => {
          dispatch({
            type: "add",
            id: noteId++,
            note,
          });
          setNote("");
        }}
      >
        添加笔记
      </button>
    </div>
  );
}

export default AddNote;
