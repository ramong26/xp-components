import React from 'react';
import './Button.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  ...rest
}) => {
  // xp-btn, secondary 클래스 동적 조합
  const classNames = ['xp-btn', variant === 'secondary' ? 'secondary' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
