import React, { Fragment } from "react";

const Input = ({ value, handler, placeholder, autoFocus, maxLength }) => {
  return (
    <Fragment>
      <input
        maxLength={maxLength || 30}
        placeholder={placeholder}
        autoFocus={autoFocus}
        value={value}
        onChange={({ target: { value } }) => handler(value)}
      />
    </Fragment>
  );
};

export default Input;
