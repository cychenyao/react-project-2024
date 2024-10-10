import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Welcome from "./components/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
    ],
  },
]);

export default router;
