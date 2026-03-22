import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
  test('renders and handles click', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Read</Button>);
    await userEvent.click(screen.getByRole('button', { name: 'Read' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('applies variant and size classes', () => {
    render(<Button variant="danger" size="lg">Delete</Button>);
    const button = screen.getByRole('button', { name: 'Delete' });
    expect(button).toHaveClass('btn--danger');
    expect(button).toHaveClass('btn--lg');
  });
});
