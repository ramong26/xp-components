import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: { onClick: { action: 'changed' } }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: 'Input Default',
    id: 'input-default',
    placeholder: '여기에 입력하세요'
  }
  
};

