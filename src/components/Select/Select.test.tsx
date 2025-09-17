import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';

import Select from './Select';

test('Select 렌더링과 선택 이벤트', async () => {
  const onChange = vi.fn();
  render(
    <Select
      options={[
        { label: '옵션 1', value: '옵션 1' },
        { label: '옵션 2', value: '옵션 2' }
      ]}
      label="옵션 선택"
      onChange={onChange}
    />
  );
  // 버튼이 렌더링되는지 확인
  const button = screen.getByRole('button', { name: /옵션 선택/i });
  expect(button).toBeInTheDocument();

  // 버튼 클릭 => 드롭다운 열림
  await userEvent.click(button);

  // 옵션이 나타나는지 확인
  const option1 = screen.getByText('옵션 1');
  expect(option1).toBeInTheDocument();

  // 옵션 클릭
  await userEvent.click(option1);

  // onChange가 호출되는지 확인
  expect(onChange).toHaveBeenCalledWith('옵션 1');
});
