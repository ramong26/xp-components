import React from 'react';
import './Button.scss';

export type Variant = 'default' | 'secondary';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  ...rest
}) => {
  return (
    <button
      className={`btn btn--${variant}`}
      {...rest}
      style={{ backgroundImage: 'url(/assets/paper.png)' }}
    >
      {children}
    </button>
  );
};

export default Button;
