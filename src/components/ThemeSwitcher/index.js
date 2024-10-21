import React from 'react'
import {useContext} from "react";
import { ThemeContext } from '../../context/ThemeContext';
import { useTheme } from '../../context/ThemeContext';

function ThemeSwitcher() {
  const {theme, toggleTheme} = useTheme();
  // const theme = "aaa"
  return (
    <button onClick={toggleTheme}>切换为 {theme === "Light" ? "Dark" : "Light"}</button>
  )
}

export default ThemeSwitcher