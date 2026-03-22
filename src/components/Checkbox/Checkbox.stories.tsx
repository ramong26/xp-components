import type { Meta, StoryObj } from '@storybook/react-vite';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'changed' } }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { label: 'Subscribe to weekend issue' } };
export const Checked: Story = { args: { label: 'Marked as read', checked: true } };
export const Accent: Story = { args: { label: 'Breaking alerts', variant: 'accent' } };
