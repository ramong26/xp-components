import React from 'react';
import './Button.scss';

export type Variant = 'primary' | 'default' | 'secondary' | 'ghost' | 'danger';
export type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}) => {
  const resolvedVariant = variant === 'default' ? 'primary' : variant;
  const classes = ['btn', `btn--${resolvedVariant}`, `btn--${size}`, className].filter(Boolean).join(' ');

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
