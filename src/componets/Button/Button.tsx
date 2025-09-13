import React from "react";
import "./Button.scss";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  return (
    <button {...rest} data-variant={variant} className="xp-btn">
      {children}
    </button>
  );
};

export default Button;
