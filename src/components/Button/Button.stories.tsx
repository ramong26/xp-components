import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    color: 'rgba(255, 0, 0, 1)'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    color: 'rgba(255, 0, 0, 1)'
  }
};
