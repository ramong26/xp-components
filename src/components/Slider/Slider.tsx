import React, { useState } from 'react';
import './Slider.scss';

export type SliderVariant = 'default' | 'accent';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  showValue?: boolean;
  variant?: SliderVariant;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  showValue = true,
  variant = 'default',
  className
}) => {
  const [internalValue, setInternalValue] = useState(value ?? min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  React.useEffect(() => {
    if (typeof value === 'number') {
      setInternalValue(value);
    }
  }, [value]);

  return (
    <div className={['slider', `slider--${variant}`, className].filter(Boolean).join(' ')}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={internalValue}
        onChange={handleChange}
        className="slider__input"
      />
      {showValue && <span className="slider__value">{internalValue}</span>}
    </div>
  );
};

export default Slider;
