import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Slider from './Slider';

describe('Slider 컴포넌트', () => {
  it('값이 변경되면 onChange가 호출된다', () => {
    const handleChange = vi.fn();
    render(<Slider onChange={handleChange} />);
    const slider = screen.getByRole('slider') as HTMLInputElement;

    fireEvent.change(slider, { target: { value: '50' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(50);
  });

  it('초기 value로 렌더링된다', () => {
    render(<Slider value={50} />);
    const slider = screen.getByRole('slider') as HTMLInputElement;
    expect(slider.value).toBe('50');
  });

  it('값이 변경되면 onChange가 호출된다', async () => {
    const handleChange = vi.fn();
    render(<Slider onChange={handleChange} />);
    const slider = screen.getByRole('slider') as HTMLInputElement;

    fireEvent.change(slider, { target: { value: '50' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(50);
  });

  it('showValue가 true일 때 값이 화면에 표시된다', () => {
    render(<Slider value={25} showValue />);
    const valueSpan = screen.getByText('25');
    expect(valueSpan).toBeInTheDocument();
  });

  it('showValue가 false일 때 값이 화면에 표시되지 않는다', () => {
    render(<Slider value={25} showValue={false} />);
    const valueSpan = screen.queryByText('25');
    expect(valueSpan).toBeNull();
  });

  it('props.value가 바뀌면 내부 값도 업데이트된다', () => {
    const { rerender } = render(<Slider value={10} />);
    const slider = screen.getByRole('slider') as HTMLInputElement;
    expect(slider.value).toBe('10');

    rerender(<Slider value={30} />);
    expect(slider.value).toBe('30');
  });
});
