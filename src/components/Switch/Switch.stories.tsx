import type { Meta, StoryObj } from '@storybook/react-vite';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' }
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: '기본 스위치',
    id: 'switch-default',
    checked: false,
    disabled: false,
  }
};

export const Checked: Story = {
  args: {
    label: '체크됨',
    id: 'switch-checked',
    checked: true,
    disabled: false,
  }
};

export const Disabled: Story = {
  args: {
    label: '비활성화',
    id: 'switch-disabled',
    checked: false,
    disabled: true,
  }
};