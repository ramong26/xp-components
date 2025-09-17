import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';

import Input from './Input';

test('label(플레이스홀더)과 input이 id로 연결되어 있다 - title variant', () => {
  render(<Input label="테스트라벨" variant="title" />);
  const label = screen.getByText('테스트라벨');
  const input = screen.getByRole('textbox');
  expect(label).toHaveAttribute('for', input.getAttribute('id'));
});

test('type, placeholder, value props 전달 확인', () => {
  render(
    <Input
      type="email"
      placeholder="이메일 입력"
      value="abc@ex.com"
      variant="default"
    />
  );
  const input = screen.getByRole('textbox');
  expect(input).toHaveAttribute('type', 'email');
  expect(input).toHaveAttribute('placeholder', '이메일 입력');
  expect(input).toHaveValue('abc@ex.com');
});

test('Input 입력 시 onChange 이벤트 발생', async () => {
  const handleChange = vi.fn();
  render(
    <Input
      label="패스워드"
      type="password"
      onChange={handleChange}
      variant="title"
    />
  );
  const input = screen.getByLabelText('패스워드');
  await userEvent.type(input, 'secret');
  expect(handleChange).toHaveBeenCalled();
});

test('id 소품 없을 때 자동 id 생성 - title variant', () => {
  render(<Input label="자동ID" variant="title" />);
  const input = screen.getByRole('textbox');
  const label = screen.getByText('자동ID');
  expect(input.getAttribute('id')).toBeTruthy();
  expect(label).toHaveAttribute('for', input.getAttribute('id'));
});

test('variant가 default일 때 label이 렌더링되지 않는다', () => {
  render(<Input label="숨김라벨" variant="default" />);
  expect(screen.queryByText('숨김라벨')).toBeNull();
});
