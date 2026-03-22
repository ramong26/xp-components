import React from 'react';
import './Tag.scss';

export type Variant = 'default' | 'feature' | 'success' | 'warning' | 'error' | 'outline';
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
    <span {...rest} className={['tag', `tag--${variant}`, `tag--${size}`, className].filter(Boolean).join(' ')}>
      {icon && <span className="tag__icon">{icon}</span>}
      <span className="tag__label">{children}</span>
      {closable && (
        <button type="button" onClick={onClose} className="tag__close" aria-label="Close tag">
          x
        </button>
      )}
    </span>
  );
};

export default Tag;
