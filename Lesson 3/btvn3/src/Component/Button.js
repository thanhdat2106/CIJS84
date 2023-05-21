import React from "react";

const Button = ({ type, nameBtn }) => {
  return (
    <button className="form_btn btn btn-success" type={type}>
      {nameBtn}
    </button>
  );
};

export default Button;
