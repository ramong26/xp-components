import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';

import Input from './Input';

test('Input 렌더링 및 label(플레이스홀더) 확인', () => {
  render(<Input label="테스트라벨" />);
  expect(screen.getByText('테스트라벨')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('Input에 placeholder, value props 전달 확인', () => {
  render(<Input label="테스트라벨" placeholder="여기에 입력" value="abc" />);
  const input = screen.getByRole('textbox');
  expect(input).toHaveAttribute('placeholder', '여기에 입력');
  expect(input).toHaveValue('abc');
});

test('Input 입력 시 onChange 이벤트 발생', async () => {
  const handleChange = vi.fn();
  render(<Input label="테스트라벨" onChange={handleChange} />);
  const input = screen.getByRole('textbox');
  await userEvent.type(input, 'hello');
  expect(handleChange).toHaveBeenCalled();
});