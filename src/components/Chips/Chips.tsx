import React from 'react';
import './Chips.scss';

export interface ChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  selected?: boolean;
  onClick?: () => void;
}

const Chips: React.FC<ChipsProps> = ({
  children,
  onRemove,
  selected,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={`chip${selected ? ' selected' : ''}`}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => onClick && e.key === 'Enter' && onClick()}
      {...rest}
    >
      <span className="chip-label">{children}</span>
      {onRemove && (
        <button
          type="button"
          className="chip-remove"
          aria-label="Remove chip"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Chips;
