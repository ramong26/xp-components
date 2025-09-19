import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Slider from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    value: { control: 'number' },
    showValue: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    showValue: true
  }
};

export const NotValue: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    showValue: false
  }
};

export const Controlled: Story = {
  render: (args) => {
    const [val, setVal] = useState(25);
    return <Slider {...args} value={val} onChange={setVal} />;
  },
  args: {
    min: 0,
    max: 100,
    step: 5,
    showValue: true
  }
};

export const WithSteps: Story = {
  args: {
    min: 0,
    max: 10,
    step: 2,
    value: 4,
    showValue: true
  }
};
