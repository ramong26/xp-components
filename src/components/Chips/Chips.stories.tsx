import type { Meta, StoryObj } from '@storybook/react-vite';
import Chips from './Chips';
const meta: Meta<typeof Chips> = {
  title: 'Components/Chips',
  component: Chips,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    onRemove: { action: 'removed' },
    selected: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof Chips>;

// 기본 Chips 스토리
export const Default: Story = {
  args: {
    children: 'Chips Default',
    selected: false
  }
};

// 선택된 상태의 Chips 스토리
export const Selected: Story = {
  args: {
    children: 'Chips Selected',
    selected: true
  }
};

// 제거 기능이 있는 Chips 스토리
export const WithRemove: Story = {
  args: {
    children: 'Chips with Remove',
    onRemove: () => {},
    selected: false
  }
};
