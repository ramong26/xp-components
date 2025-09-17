import React from 'react';
import './Chips.scss';

export interface ChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  selected?: boolean;
}

const Chips: React.FC<ChipsProps> = ({
  children,
  onRemove,
  selected,
  ...rest
}) => {
  return (
    <div className={`chip ${selected ? 'selected' : ''}`} {...rest}>
      <span className="chip-label">{children}</span>
      <button
        type="button"
        className="chip-remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove?.();
        }}
      >
        ×
      </button>
    </div>
  );
};

export default Chips;
