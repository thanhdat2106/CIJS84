import React from "react";

const CustomInput = ({ title, type, name, placeholder }) => {
  return (
    // <div class="custom-input">
    <div>
      <label class="form-label">{title}</label>
      <input
        type={type}
        name={name}
        class="form-control"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
