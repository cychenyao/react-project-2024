import { createBrowserRouter } from "react-router-dom";
import App, { loader as appLoader } from "./App";
import Welcome from "./components/Welcome";
import NoteDetails from "./components/NoteDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
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
