import React, { useId } from 'react';
import './Input.scss';
import paperTexture from '../../../public/assets/paper.png';

export type Variant = 'default' | 'title';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: Variant;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  variant = 'default',
  id: propId,
  type = 'text',
  className = '',
  ...rest
}) => {
  const reactId = useId();
  const id = propId || reactId;

  return (
    <div className={`input__wrapper`}>
      <input
        id={id}
        type={type}
        className={`input input--${variant} ${className}`}
        style={{ backgroundImage: `url(${paperTexture})` }}
        {...rest}
      />
      {variant === 'title' && label && (
        <label
          htmlFor={id}
          className="input__placeholder"
          style={{ backgroundImage: `url(${paperTexture})` }}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
