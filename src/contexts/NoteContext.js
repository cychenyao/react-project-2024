import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

// 1. 定义 reducer
function notesReducer(notes, action) {
  switch (
    action.type // 1.1 根据习惯，使用 type 来区分是哪个事件
  ) {
    case "add": {
      return [
        ...notes,
        {
          id: action.id,
          note: action.note,
        },
      ];
    }
    case "delete": {
      return notes.filter((note) => note.id !== action.id);
    }
    default: {
      throw Error("没有此 action 类型");
    }
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
