import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi, describe } from 'vitest';

import Chips from './Chips';

describe('Chips 컴포넌트', () => {
  test('Chips 렌더링 확인', () => {
    render(<Chips>Chips</Chips>);
    const chipElement = screen.getByText('Chips');
    expect(chipElement).toBeInTheDocument();
  });
});

test('Chips 클릭 이벤트', async () => {
  const onClick = vi.fn();
  render(<Chips onClick={onClick}>Clickable Chips</Chips>);
  const chipElement = screen.getByText('Clickable Chips');
  await userEvent.click(chipElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('Chips 제거 버튼 클릭 이벤트', async () => {
  const onRemove = vi.fn();
  render(<Chips onRemove={onRemove}>Removable Chips</Chips>);
  const removeButton = screen.getByText('×');
  await userEvent.click(removeButton);
  expect(onRemove).toHaveBeenCalledTimes(1);
});

test('selected prop에 따른 스타일 변경', () => {
  const { rerender } = render(<Chips selected={false}>Unselected Chips</Chips>);
  const chipElement = screen.getByText('Unselected Chips');
  expect(chipElement).not.toHaveClass('selected');
  rerender(<Chips selected={true}>Selected Chips</Chips>);
  expect(screen.getByText('Selected Chips')).toHaveClass('selected');
});

test('Chips 제거 버튼 클릭 시 onClick 이벤트 미발생', async () => {
  const onClick = vi.fn();
  const onRemove = vi.fn();
  render(
    <Chips onClick={onClick} onRemove={onRemove}>
      Clickable Chips
    </Chips>
  );
  const removeButton = screen.getByText('×');
  await userEvent.click(removeButton);
  expect(onRemove).toHaveBeenCalledTimes(1);
  expect(onClick).not.toHaveBeenCalled();
});
