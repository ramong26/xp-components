import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';

import Switch from './Switch';

test('스위치가 렌더링된다', () => {
  render(<Switch label="테스트 스위치" />);
  expect(screen.getByLabelText('테스트 스위치')).toBeInTheDocument();
});

test('checked prop이 적용된다', () => {
  render(<Switch label="체크 스위치" checked />);
  const input = screen.getByLabelText('체크 스위치') as HTMLInputElement;
  expect(input.checked).toBe(true);
});

test('onChange 핸들러가 호출된다', async () => {
  const handleChange = vi.fn();
  render(<Switch label="onChange 스위치" onChange={handleChange} />);
  const input = screen.getByLabelText('onChange 스위치');
  await userEvent.click(input);
  expect(handleChange).toHaveBeenCalled();
});

test('disabled prop이 적용된다', () => {
  render(<Switch label="비활성화 스위치" disabled />);
  const input = screen.getByLabelText('비활성화 스위치');
  expect(input).toBeDisabled();
});

test('label prop이 정상적으로 표시된다', () => {
  render(<Switch label="라벨 스위치" />);
  expect(screen.getByText('라벨 스위치')).toBeInTheDocument();
});