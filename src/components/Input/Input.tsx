import React, { useId } from 'react';
import './Input.scss';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, id: propId, type = 'text', ...rest }) => {
  const reactId = useId();
  const id = propId || reactId;

  return (
    <div className="input_wrapper">
      <input type={type} className="input_field" id={id} {...rest} />
      <label htmlFor={id} className="input_placeholder">{label}</label>
    </div>
  );
};

export default Input;