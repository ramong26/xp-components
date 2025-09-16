import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';

import Checkbox from './Checkbox';

test('체크박스 렌더링과 체크 이벤트', async () => {
  const onChange = vi.fn();
  render(<Checkbox label="동의" onChange={onChange} />);
  const checkbox = screen.getByRole('checkbox', { name: /동의/i });
  expect(checkbox).not.toBeChecked();
  await userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(onChange).toHaveBeenCalled();
});
