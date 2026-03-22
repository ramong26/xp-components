import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import Chips from './Chips';

describe('Chips', () => {
  test('renders label', () => {
    render(<Chips>Culture</Chips>);
    expect(screen.getByText('Culture')).toBeInTheDocument();
  });

  test('calls onClick from pointer and keyboard', async () => {
    const onClick = vi.fn();
    render(<Chips onClick={onClick}>Opinion</Chips>);
    const chip = screen.getByRole('button');
    await userEvent.click(chip);
    chip.focus();
    await userEvent.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  test('calls onRemove without bubbling click', async () => {
    const onClick = vi.fn();
    const onRemove = vi.fn();
    render(<Chips onClick={onClick} onRemove={onRemove}>Archive</Chips>);
    await userEvent.click(screen.getByRole('button', { name: 'Remove chip' }));
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onClick).not.toHaveBeenCalled();
  });
});
