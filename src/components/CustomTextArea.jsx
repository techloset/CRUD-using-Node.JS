import React from "react";

export default function CustomTextArea({ name, placeholder, onChange }) {
  return (
    <div className="col mb-3">
      <textarea
        name={name}
        placeholder={placeholder}
        className="form-control"
        onChange={onChange}
      ></textarea>
    </div>
  );
}
