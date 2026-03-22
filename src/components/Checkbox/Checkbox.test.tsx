import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('toggles checked state and calls onChange', async () => {
    const onChange = vi.fn();
    render(<Checkbox label="Agree" onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox', { name: 'Agree' });
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(onChange).toHaveBeenCalled();
  });

  test('applies accent variant class', () => {
    render(<Checkbox label="Alerts" variant="accent" />);
    expect(screen.getByText('Alerts').closest('label')).toHaveClass('checkbox--accent');
  });
});
