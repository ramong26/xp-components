import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Slider from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = { args: { value: 50, showValue: true } };
export const Accent: Story = { args: { value: 30, showValue: true, variant: 'accent' } };
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(25);
    return <Slider {...args} value={value} onChange={setValue} />;
  },
  args: { step: 5, showValue: true }
};
