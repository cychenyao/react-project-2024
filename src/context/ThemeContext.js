import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme, setTheme] = useState("Light");
    const toggleTheme = ()=> theme === "Light" ? setTheme("Dark") : setTheme("Light")
    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export function useTheme(){
    return useContext(ThemeContext)
}