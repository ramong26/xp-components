import React, { useState, useRef, useEffect, useMemo } from 'react';
import type { KeyboardEvent } from 'react';
import './Select.scss';

export interface SelectProps {
  label: string;
  options: Array<{ label: string; value: string | number }>;
  value?: string | number;
  onChange?: (value: string | number) => void;
  [key: string]: any;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [focusedIdx, setFocusedIdx] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  //  외부 영역 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
        setFocusedIdx(null);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  // 키보드 내비게이션
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIdx((prev) =>
        prev === null || prev === options.length - 1 ? 0 : prev + 1
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIdx((prev) =>
        prev === null || prev === 0 ? options.length - 1 : prev - 1
      );
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

  // 옵션이 열리면 첫 번째 옵션에 포커스
  useEffect(() => {
    if (open) setFocusedIdx(0);
    else setFocusedIdx(null);
  }, [open]);

  // 옵션이 열리면 ul에 포커스
  useEffect(() => {
    if (open) ulRef.current?.focus();
  }, [open]);

  // useMemo으로 selectedLabel 계산
  const selectedLabel = useMemo(
    () => options.find((opt) => opt.value === value)?.label ?? label,
    [options, value, label]
  );
  return (
    <div className="select" ref={rootRef}>
      <button
        {...rest}
        className="select_button"
        onClick={() => setOpen((v) => !v)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="select-list"
        aria-label={label}
        onKeyDown={handleKeyDown}
      >
        {selectedLabel}
      </button>
      {open && (
        <ul
          className="select_list"
          role="listbox"
          id="select-list"
          onKeyDown={handleKeyDown}
          ref={ulRef}
        >
          {options.map((opt, idx) => (
            <li
              key={opt.value}
              className={`select_item ${focusedIdx === idx ? 'focused' : ''}`}
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
