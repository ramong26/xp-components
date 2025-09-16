import React from 'react';
import './Button.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  ...rest
}) => {
  // btn, secondary 클래스 동적 조합
  const classNames = ['btn', variant === 'secondary' ? 'secondary' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
