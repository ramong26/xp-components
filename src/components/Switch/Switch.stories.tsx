import type { Meta, StoryObj } from '@storybook/react-vite';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'changed' } }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { label: 'Morning edition', checked: false } };
export const Checked: Story = { args: { label: 'Daily alerts', checked: true } };
export const Accent: Story = { args: { label: 'Breaking news', checked: true, variant: 'accent' } };
export const Disabled: Story = { args: { label: 'Disabled toggle', disabled: true } };
