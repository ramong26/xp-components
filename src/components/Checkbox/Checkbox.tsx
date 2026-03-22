import React from 'react';
import './Checkbox.scss';

export type CheckboxVariant = 'default' | 'accent';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: CheckboxVariant;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, variant = 'default', className, ...rest }) => {
  const reactId = React.useId();
  const id = rest.id ?? reactId;
  const classes = ['checkbox', `checkbox--${variant}`, className].filter(Boolean).join(' ');

  return (
    <label htmlFor={id} className={classes}>
      <input id={id} type="checkbox" className="checkbox__input" {...rest} />
      <span className="checkbox__box" aria-hidden="true" />
      <span className="checkbox__label">{label}</span>
    </label>
  );
};

export default Checkbox;
