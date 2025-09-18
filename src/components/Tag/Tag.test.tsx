import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';

import Tag from './Tag';

test('Tag span 렌더링 확인', () => {
  render(<Tag>테스트</Tag>);
  const tag = screen.getByText(/테스트/i);
  expect(tag).toBeInTheDocument();
});

test('Tag icon 렌더링 확인', () => {
  render(<Tag icon={<span data-testid="icon">⭐</span>}>아이콘</Tag>);
  const icon = screen.getByTestId('icon');
  expect(icon).toBeInTheDocument();
});

test('Tag closable 버튼 클릭 이벤트', async () => {
  const onClose = vi.fn();
  render(
    <Tag closable onClose={onClose}>
      닫기 테스트
    </Tag>
  );

  const closeBtn = screen.getByRole('button', { name: /닫기/i });
  await userEvent.click(closeBtn);
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('Tag variant, size class 적용', () => {
  render(
    <Tag variant="success" size="lg">
      클래스 테스트
    </Tag>
  );

  const tag = screen.getByText(/클래스 테스트/i);
  expect(tag).toHaveClass('tag--success');
  expect(tag).toHaveClass('tag--lg');
});
