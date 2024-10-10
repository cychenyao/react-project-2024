import "./App.css";
import NoteList from "./components/NoteList";
import SearchNote from "./components/SearchNote";
import NoteDetails from "./components/NoteDetails";
import {Outlet} from "react-router-dom";
function App() {
  const notes = [];

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
