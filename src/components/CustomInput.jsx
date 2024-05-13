import React from "react";

const CustomInput = ({ type, placeholder, name, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="form-control mb-3"
      onChange={onChange}
    />
  );
};
export default CustomInput;
