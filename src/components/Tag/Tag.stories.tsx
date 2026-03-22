import type { Meta, StoryObj } from '@storybook/react-vite';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: { children: 'Feature' } };
export const Feature: Story = { args: { children: 'Front Page', variant: 'feature' } };
export const Success: Story = { args: { children: 'Published', variant: 'success' } };
export const Warning: Story = { args: { children: 'Draft', variant: 'warning' } };
export const Error: Story = { args: { children: 'Retracted', variant: 'error' } };
export const Outline: Story = { args: { children: 'Archive', variant: 'outline' } };
