import "./App.css";
import { Form, Outlet, useLoaderData } from "react-router-dom";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider,useTheme } from "./context/ThemeContext";

export async function loader({ request }) {
  const url = new URL(request.url);
  return fetch(`http://localhost:8080/notes?${url.searchParams}`);
}

function App() {
  const notes = useLoaderData();
  return (
    <ThemeProvider>
      <div className="container">
        <div>
          <h1>
            主题切换
          </h1>
          <ThemeSwitcher
          />
        </div>
        <DisplayTheme />
      </div>
    </ThemeProvider>
  );
}

function DisplayTheme(){
  const {theme} = useTheme();
  return <p>当前主题：{theme}</p>
}

export default App;
