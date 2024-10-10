import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Welcome from "./components/Welcome";
import NoteDetails from "./components/NoteDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "notes/:noteId",
        element: <NoteDetails />,
      },
    ],
  },
]);

export default router;
