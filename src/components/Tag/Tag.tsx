import React from 'react';
import './Tag.scss';
import paperTexture from '../../../public/assets/paper.png';

export type Variant = 'default' | 'success' | 'warning' | 'error' | 'outline';
export type Size = 'sm' | 'md' | 'lg';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  closable,
  onClose,
  className = '',
  ...rest
}) => {
  return (
    <span
      {...rest}
      className={`tag tag--${variant} tag--${size} ${className}`}
      style={{ backgroundImage: `url(${paperTexture})` }}
    >
      {icon && <span className="tag__icon">{icon}</span>}
      {children}
      {closable && (
        <button
          type="button"
          onClick={onClose}
          className="tag__close"
          aria-label="닫기"
        >
          ×
        </button>
      )}
    </span>
  );
};

export default Tag;
