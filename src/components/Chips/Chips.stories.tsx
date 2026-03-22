import type { Meta, StoryObj } from '@storybook/react-vite';
import Chips from './Chips';

const meta: Meta<typeof Chips> = {
  title: 'Components/Chips',
  component: Chips,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    onRemove: { action: 'removed' }
  }
};

export default meta;
type Story = StoryObj<typeof Chips>;

export const Default: Story = { args: { children: 'Culture', variant: 'default' } };
export const Selected: Story = { args: { children: 'Featured', selected: true, variant: 'accent' } };
export const Removable: Story = { args: { children: 'Archive', variant: 'muted', onRemove: () => {} } };
