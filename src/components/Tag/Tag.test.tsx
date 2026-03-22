import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import Tag from './Tag';

describe('Tag', () => {
  test('renders label and icon', () => {
    render(<Tag icon={<span data-testid="icon">*</span>}>Featured</Tag>);
    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('calls onClose when closable', async () => {
    const onClose = vi.fn();
    render(<Tag closable onClose={onClose}>Archive</Tag>);
    await userEvent.click(screen.getByRole('button', { name: 'Close tag' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('applies variant and size classes', () => {
    render(<Tag variant="feature" size="lg">Lead</Tag>);
    const tag = screen.getByText('Lead').closest('.tag');
    expect(tag).toHaveClass('tag--feature');
    expect(tag).toHaveClass('tag--lg');
  });
});
