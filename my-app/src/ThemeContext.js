import { createContext } from "react";
const defaultTheme = { theme: "light" };
const ThemeContext = createContext(defaultTheme);
export default ThemeContext;
