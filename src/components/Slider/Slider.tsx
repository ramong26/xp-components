import React, { useState } from 'react';
import './Slider.scss';
import paperTexture from '../../assets/paper.png';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  showValue?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  showValue = true
}) => {
  const [internalValue, setInternalValue] = useState(value ?? min);

  // 값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  // 외부에서 value가 바뀔 때 동기화
  React.useEffect(() => {
    if (typeof value === 'number') {
      setInternalValue(value);
    }
  }, [value]);

  return (
    <div className="slider">
      <input
        style={{ backgroundImage: `url(${paperTexture})` }}
        type="range"
        min={min}
        max={max}
        step={step}
        value={internalValue}
        onChange={handleChange}
        className="slider__input"
      />
      {showValue && (
        <span
          style={{ backgroundImage: `url(${paperTexture})` }}
          className="slider__value"
        >
          {internalValue}
        </span>
      )}
    </div>
  );
};

export default Slider;
