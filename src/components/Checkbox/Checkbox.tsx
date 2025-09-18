import React from 'react';
import './Checkbox.scss';
import paperTexture from '../../assets/paper.png';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...rest }) => {
  const reactId = React.useId();
  const id = rest.id ?? reactId;

  return (
    <label htmlFor={id} className="checkbox">
      <input
        id={id}
        type="checkbox"
        className="checkbox_input"
        {...rest}
        style={{ backgroundImage: `url(${paperTexture})` }}
      />
      {label}
    </label>
  );
};

export default Checkbox;
