import React, { useEffect, useRef } from "react";

const InputWithLabel = ({
  id,
  label,
  value,
  onInputChange,
  type = "text",
  children,
  isFocused,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        id={id}
        type={type}
        value={value}
        ref={inputRef}
        onChange={onInputChange}
      />
      <p>
        Searching for <strong>{value}</strong>
      </p>
    </>
  );
};

export default InputWithLabel;
