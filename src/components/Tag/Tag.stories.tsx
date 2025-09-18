import type { Meta, StoryObj } from '@storybook/react-vite';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: { onClick: { action: 'clicked' } }
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Tag'
  }
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Tag'
  }
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Tag'
  }
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Tag'
  }
};
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Tag'
  }
};
