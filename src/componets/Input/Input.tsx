import React from 'react';
import './Input.scss';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...rest }) => {
  return (
    <div className="input_wrapper">
      <input type="text" className="input_field" id={id} {...rest} />
      <label htmlFor={id} className="input_placeholder">{label}</label>
    </div>
  );
};

export default Input;