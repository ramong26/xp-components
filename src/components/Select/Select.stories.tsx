import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'changed' } }
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { label: 'Front Page', value: 'front-page' },
  { label: 'Culture', value: 'culture' },
  { label: 'Opinion', value: 'opinion' }
];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>();
    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: { label: 'Choose section', options }
};

export const Accent: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>('culture');
    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: { label: 'Choose section', options, variant: 'accent' }
};
