import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import Switch from './Switch';

describe('Switch', () => {
  test('renders label and checked state', () => {
    render(<Switch label="Alerts" checked readOnly />);
    expect(screen.getByLabelText('Alerts')).toBeChecked();
  });

  test('fires onChange', async () => {
    const onChange = vi.fn();
    render(<Switch label="Edition" onChange={onChange} />);
    await userEvent.click(screen.getByLabelText('Edition'));
    expect(onChange).toHaveBeenCalled();
  });

  test('respects disabled state', () => {
    render(<Switch label="Disabled" disabled />);
    expect(screen.getByLabelText('Disabled')).toBeDisabled();
  });
});
