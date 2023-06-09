import React from "react";

const Select = ({ title, dataOption, onChange }) => {
  return (
    <div>
      <label class="form-label">{title}</label>
      <select className="form-select" name={title} onChange>
        {dataOption.map((item, index) => (
          <option key={index} className="form_option" value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
