import React, { useId } from 'react';
import './Input.scss';
import paperTexture from '../../../public/assets/paper.png';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
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

  // variant가 title일 때만 클래스 추가
  const classNames = variant === 'title' ? 'input_field title' : 'input_field';

  return (
    <div className="input_wrapper">
      <input
        style={{ backgroundImage: `url(${paperTexture})` }}
        type={type}
        className={classNames}
        id={id}
        {...rest}
      />
      {variant === 'title' && label && (
        <label
          style={{ backgroundImage: `url(${paperTexture})` }}
          htmlFor={id}
          className="input_placeholder"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
