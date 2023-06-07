import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import Select from "../../Component/Select";

const dataOption = [
  { key: "Light", name: "Light" },
  { key: "Dark", name: "Dark" },
];

const SelectTheme = () => {
  const themeBox = useContext(ThemeContext);

  const onSelectTheme = (event) => {
    themeBox.setTheme(event.target.value);
    console.log("1233");
  };
  return (
    <div style={{ width: 300 }}>
      <Select
        title="Change Theme"
        dataOption={dataOption}
        value={themeBox.theme}
        onChange={(e) => {
          onSelectTheme(e);
        }}
      />
    </div>
  );
};

export default SelectTheme;
