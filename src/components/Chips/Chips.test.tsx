vi.mock('../../assets/paper.png', () => 'paper.png');

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi, describe } from 'vitest';

import Chips from './Chips';

describe('Chips 컴포넌트', () => {
  test('Chips 렌더링 확인', () => {
    render(<Chips>Chips</Chips>);
    expect(screen.getByText('Chips')).toBeInTheDocument();
  });

  test('Chips 클릭 이벤트', async () => {
    const onClick = vi.fn();
    render(<Chips onClick={onClick}>Clickable Chips</Chips>);
    await userEvent.click(screen.getByText('Clickable Chips'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('Chips 제거 버튼 클릭 이벤트', async () => {
    const onRemove = vi.fn();
    render(<Chips onRemove={onRemove}>Removable Chips</Chips>);
    const removeButton = screen.getByRole('button', { name: 'Remove chip' });
    await userEvent.click(removeButton);
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  test('selected prop에 따른 스타일 변경', () => {
    const { rerender, container } = render(<Chips>Default</Chips>);
    const chipElement = container.firstChild as HTMLElement;
    expect(chipElement).not.toHaveClass('selected');

    rerender(<Chips selected>Selected Chips</Chips>);
    const selectedChip = container.firstChild as HTMLElement;
    expect(selectedChip).toHaveClass('selected');
  });

  test('Chips 제거 버튼 클릭 시 onClick 이벤트 미발생', async () => {
    const onClick = vi.fn();
    const onRemove = vi.fn();
    render(
      <Chips onClick={onClick} onRemove={onRemove}>
        Clickable Chips
      </Chips>
    );
    const removeButton = screen.getByRole('button', { name: 'Remove chip' });
    await userEvent.click(removeButton);
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onClick).not.toHaveBeenCalled();
  });

  test('onRemove가 없을 때 버튼 없음', () => {
    render(<Chips>Test Chips</Chips>);
    const removeButton = screen.queryByRole('button', { name: 'Remove chip' });
    expect(removeButton).toBeNull();
  });

  test('selected가 false일 때 클래스 없음', () => {
    const { container } = render(<Chips selected={false}>Not Selected</Chips>);
    const chipElement = container.firstChild as HTMLElement;
    expect(chipElement).not.toHaveClass('selected');
  });

  test('키보드 Enter로 클릭 이벤트 발생', async () => {
    const onClick = vi.fn();
    render(<Chips onClick={onClick}>Keyboard Chips</Chips>);
    const chipElement = screen.getByRole('button');
    chipElement.focus();
    await userEvent.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('UI 스냅샷 테스트', () => {
    const { container } = render(<Chips selected>Snapshot Chips</Chips>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
