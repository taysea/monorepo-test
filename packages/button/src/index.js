import React from "react";

const Button = ({
  onClick,
  onFocus,
  onBlur,
  children,
  isSelected,
  ...rest
}) => (
  <button
    style={{
      border: 0,
      backgroundColor: isSelected ? "rebeccapurple" : "hotpink",
      color: isSelected ? "white" : "black",
      padding: "12px 24px",
      margin: "12px",
      borderRadius: "3px",
    }}
    onClick={onClick}
    onFocus={onFocus}
    onBlur={onBlur}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
