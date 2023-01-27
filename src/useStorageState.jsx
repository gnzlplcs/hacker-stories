import React, { useState, useEffect } from "react";

const useStorageState = (key, intialState) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) || intialState
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};

export default useStorageState;
