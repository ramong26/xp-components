import React, { useState, useRef, useEffect, useMemo } from 'react';
import type { KeyboardEvent } from 'react';
import './Select.scss';

export type SelectVariant = 'default' | 'accent';

export interface SelectProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  label: string;
  options: Array<{ label: string; value: string | number }>;
  value?: string | number;
  onChange?: (value: string | number) => void;
  variant?: SelectVariant;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange, variant = 'default', className, ...rest }) => {
  const [open, setOpen] = useState(false);
  const [focusedIdx, setFocusedIdx] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
        setFocusedIdx(null);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setOpen(true);
      return;
    }

    if (!open) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIdx((prev) => (prev === null || prev === options.length - 1 ? 0 : prev + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIdx((prev) => (prev === null || prev === 0 ? options.length - 1 : prev - 1));
    } else if (e.key === 'Enter' && focusedIdx !== null) {
      e.preventDefault();
      const selectedOption = options[focusedIdx];
      onChange?.(selectedOption.value);
      setOpen(false);
      setFocusedIdx(null);
    } else if (e.key === 'Escape') {
      setOpen(false);
      setFocusedIdx(null);
    }
  };

  useEffect(() => {
    if (open) setFocusedIdx(0);
    else setFocusedIdx(null);
  }, [open]);

  useEffect(() => {
    if (open) ulRef.current?.focus();
  }, [open]);

  const selectedLabel = useMemo(() => options.find((opt) => opt.value === value)?.label ?? label, [options, value, label]);

  return (
    <div className={['select', `select--${variant}`, className].filter(Boolean).join(' ')} ref={rootRef}>
      <button
        {...rest}
        className="select__button"
        onClick={() => setOpen((v) => !v)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="select-list"
        aria-label={label}
        onKeyDown={handleKeyDown}
      >
        <span>{selectedLabel}</span>
        <span className="select__caret" aria-hidden="true">
          {open ? '-' : '+'}
        </span>
      </button>
      {open && (
        <ul className="select__list" role="listbox" id="select-list" onKeyDown={handleKeyDown} ref={ulRef} tabIndex={-1}>
          {options.map((opt, idx) => (
            <li
              key={opt.value}
              className={`select__item ${focusedIdx === idx ? 'is-focused' : ''} ${value === opt.value ? 'is-selected' : ''}`}
              role="option"
              tabIndex={focusedIdx === idx ? 0 : -1}
              aria-selected={value === opt.value}
              onClick={() => {
                onChange?.(opt.value);
                setOpen(false);
                setFocusedIdx(null);
              }}
              onMouseEnter={() => setFocusedIdx(idx)}
              onMouseLeave={() => setFocusedIdx(null)}
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
