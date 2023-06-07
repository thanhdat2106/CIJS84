import { useState } from "react";
import Box from "./Box";
import ThemeContext from "../../ThemeContext";
import SelectTheme from "./SelectTheme";

const Lesson9 = () => {
  const [theme, setTheme] = useState("Light");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="row">
        <Box content="Component A" />
        <Box content="Component B" />
        <Box content="Component C" />
      </div>
      <SelectTheme />
    </ThemeContext.Provider>
  );
};

export default Lesson9;
