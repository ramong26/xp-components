import React from 'react';
import './Switch.scss';
import paperTexture from '../../assets/paper.png';


export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {

  label?: string;
}

const Switch: React.FC<SwitchProps> = ({ label, disabled, ...rest }) => {
  const reactId = React.useId();
  const id = rest.id ?? reactId;

  return (
    <label className={`switch${disabled ? ' switch--disabled' : ''}`}>
      <input
        id={id}
        type="checkbox"
        className="switch__input"
        disabled={disabled}
        {...rest}
      />
      <span className="switch__slider" style={{ backgroundImage: `url(${paperTexture})` }} />
      {label && <span className="switch__label">{label}</span>}
    </label>
  );
};

export default Switch;