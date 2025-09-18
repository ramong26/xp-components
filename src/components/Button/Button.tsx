import React from 'react';
import './Button.scss';
import PaperStyle from '../../assets/paper.png';

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
      style={{ backgroundImage: `url(${PaperStyle})` }}
    >
      {children}
    </button>
  );
};

export default Button;
