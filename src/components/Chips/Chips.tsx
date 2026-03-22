import React from 'react';
import './Chips.scss';

export type ChipsVariant = 'default' | 'accent' | 'muted';

export interface ChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  selected?: boolean;
  onClick?: () => void;
  variant?: ChipsVariant;
}

const Chips: React.FC<ChipsProps> = ({
  children,
  onRemove,
  selected,
  onClick,
  variant = 'default',
  className,
  ...rest
}) => {
  const classes = ['chip', `chip--${variant}`, selected && 'is-selected', className].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      {...rest}
    >
      <span className="chip__label">{children}</span>
      {onRemove && (
        <button
          type="button"
          className="chip__remove"
          aria-label="Remove chip"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          x
        </button>
      )}
    </div>
  );
};

export default Chips;
