import React from 'react';
import './Switch.scss';

export type SwitchVariant = 'default' | 'accent';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: SwitchVariant;
}

const Switch: React.FC<SwitchProps> = ({ label, disabled, variant = 'default', className, ...rest }) => {
  const reactId = React.useId();
  const id = rest.id ?? reactId;
  const classes = ['switch', `switch--${variant}`, disabled && 'switch--disabled', className].filter(Boolean).join(' ');

  return (
    <label className={classes} htmlFor={id}>
      <input id={id} type="checkbox" className="switch__input" disabled={disabled} {...rest} />
      <span className="switch__slider" />
      {label && <span className="switch__label">{label}</span>}
    </label>
  );
};

export default Switch;
