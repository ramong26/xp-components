import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'changed' } }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: 'Search the archive', variant: 'default' } };
export const Title: Story = { args: { label: 'Headline', placeholder: 'Type headline', variant: 'title' } };
export const Search: Story = { args: { label: 'Search', placeholder: 'Find a story', variant: 'search' } };
