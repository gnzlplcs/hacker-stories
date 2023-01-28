import React from "react";

const InputWithLabel = ({ id, label, value, onInputChange, type = "text", children }) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input id={id} type={type} onChange={onInputChange} value={value} />
      <p>
        Searching for <strong>{value}</strong>
      </p>
    </>
  );
};

export default InputWithLabel;
