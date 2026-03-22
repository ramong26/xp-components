import React, { useId } from 'react';
import './Input.scss';

export type Variant = 'default' | 'title' | 'search';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: Variant;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  variant = 'default',
  id: propId,
  type = 'text',
  className,
  ...rest
}) => {
  const reactId = useId();
  const id = propId || reactId;
  const classes = ['input', `input--${variant}`, className].filter(Boolean).join(' ');

  return (
    <div className="input__wrapper">
      <input id={id} type={type} className={classes} {...rest} />
      {(variant === 'title' || variant === 'search') && label && (
        <label htmlFor={id} className="input__label">
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
