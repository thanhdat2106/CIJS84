import ThemeContext from "../../ThemeContext";
import { useContext } from "react";

const Box = ({ content }) => {
  const themeBox = useContext(ThemeContext);
  return (
    <div
      className="border border-primary"
      style={{
        width: 300,
        height: 200,
        margin: 10,
        backgroundColor: themeBox.theme == "Light" ? "white" : "black",
      }}
    >
      <h2
        style={{
          color: themeBox.theme == "Light" ? "black" : "white",
        }}
      >
        {content}
      </h2>
    </div>
  );
};

export default Box;
