import React, { useId } from 'react';
import './Input.scss';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // label을 optional로 만듦
  variant?: 'default' | 'title';
}

const Input: React.FC<InputProps> = ({
  label,
  variant = 'default',
  id: propId,
  type = 'text',
  ...rest
}) => {
  const reactId = useId();
  const id = propId || reactId;

  const classNames = ['input', variant !== 'default' && variant]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="input_wrapper">
      <input
        type={type}
        className={`input_field ${classNames}`}
        id={id}
        {...rest}
      />
      {variant === 'title' && label && (
        <label htmlFor={id} className="input_placeholder">
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
