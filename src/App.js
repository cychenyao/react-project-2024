import "./App.css";
import NoteList from "./components/NoteList";
import { NotesProvider } from "./contexts/NoteContext";
import AddNote from "./components/AddNote";
import EffectComponent from "./components/EffectComponent";
import Example from './components/Example';

function App() {
  return (
    <NotesProvider>
      <main className="container">
        {/* <EffectComponent /> */}
        <Example />
        <NoteList />
        <AddNote />
      </main>
    </NotesProvider>
  );
}

export default App;
