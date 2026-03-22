import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import Select from './Select';

describe('Select', () => {
  test('opens options and selects a value', async () => {
    const onChange = vi.fn();
    render(
      <Select
        label="Choose"
        onChange={onChange}
        options={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' }
        ]}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Choose' }));
    await userEvent.click(screen.getByText('Option 1'));
    expect(onChange).toHaveBeenCalledWith('option-1');
  });

  test('applies accent variant class', () => {
    render(<Select label="Choose" variant="accent" options={[{ label: 'One', value: 1 }]} />);
    expect(screen.getByRole('button', { name: 'Choose' }).closest('.select')).toHaveClass('select--accent');
  });
});
