import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import Input from './Input';

describe('Input', () => {
  test('connects title label to input id', () => {
    render(<Input label="Headline" variant="title" />);
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Headline');
    expect(label).toHaveAttribute('for', input.getAttribute('id'));
  });

  test('passes placeholder and type props', () => {
    render(<Input type="email" placeholder="name@example.com" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('placeholder', 'name@example.com');
  });

  test('fires onChange', async () => {
    const onChange = vi.fn();
    render(<Input label="Search" variant="search" onChange={onChange} />);
    await userEvent.type(screen.getByRole('textbox'), 'archive');
    expect(onChange).toHaveBeenCalled();
  });
});
