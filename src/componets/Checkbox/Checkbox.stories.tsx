import type { Meta, StoryObj } from '@storybook/react-vite';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: { onClick: { action: 'clicked' } }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    label: 'Checkbox Default'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Checkbox Checked',
    checked: true
  }
};
