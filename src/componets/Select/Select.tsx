import React, { useState } from 'react';
import './Select.scss';

export interface SelectProps {
  label: string;
  options: Array<{ label: string; value: string | number }>;
  value?: string | number;
  onChange?: (value: string | number) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="select">
      <button
        className="select_button"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {value ? options.find((opt) => opt.value === value)?.label : label}
      </button>
      {open && (
        <ul className="select_list">
          {options.map((opt) => (
            <li
              key={opt.value}
              className="select_item"
              onClick={() => {
                onChange?.(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
