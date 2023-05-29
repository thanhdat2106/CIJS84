import React from "react";

const TextArea = ({ title, name, placeholder }) => {
  return (
    // <div class="custom-input">
    <div>
      <label class="form-label">{title}</label>
      <textarea
        name={name}
        class="form-control"
        placeholder={placeholder}
        row="4"
      ></textarea>
    </div>
  );
};

export default TextArea;
