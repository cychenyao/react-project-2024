import "./App.css";
import NoteList from "./components/NoteList";
import SearchNote from "./components/SearchNote";
import NoteDetails from "./components/NoteDetails";
import { Outlet } from "react-router-dom";

function App() {
  const notes = [
    { id: 1, title: "笔记 1", content: "这是笔记 1", likes: 0 },
    { id: 2, title: "笔记 2", content: "这是笔记 2", likes: 0 },
    { id: 3, title: "笔记 3", content: "这是笔记 3", likes: 0 },
    { id: 4, title: "笔记 4", content: "这是笔记 4", likes: 0 },
  ];

  return (
    <div className="container">
      <aside className="sidebar">
        <h1 className="logo">我的笔记本</h1>
        <SearchNote />
        <button type="submit" className="addNoteBtn">
          添加笔记
        </button>
        <NoteList notes={notes} />
      </aside>

      <main className="mainContent">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
