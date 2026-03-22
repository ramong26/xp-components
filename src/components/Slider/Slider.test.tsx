import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Slider from './Slider';

describe('Slider', () => {
  it('calls onChange with numeric value', () => {
    const onChange = vi.fn();
    render(<Slider onChange={onChange} />);
    fireEvent.change(screen.getByRole('slider'), { target: { value: '50' } });
    expect(onChange).toHaveBeenCalledWith(50);
  });

  it('shows current value when enabled', () => {
    render(<Slider value={25} showValue />);
    expect(screen.getByText('25')).toBeInTheDocument();
  });

  it('hides value when disabled', () => {
    render(<Slider value={25} showValue={false} />);
    expect(screen.queryByText('25')).toBeNull();
  });
});
