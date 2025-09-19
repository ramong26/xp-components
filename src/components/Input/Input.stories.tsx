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

export const TitleVariant: Story = {
  args: {
    label: '타이틀 입력',
    id: 'input-title',
    type: 'text',
    placeholder: '타이틀 입력',
    variant: 'title'
  }
};

export const Text: Story = {
  args: {
    id: 'input-text',
    type: 'text',
    placeholder: '텍스트 입력',
    variant: 'default'
  }
};

export const Password: Story = {
  args: {
    id: 'input-password',
    type: 'password',
    placeholder: '비밀번호 입력',
    variant: 'default'
  }
};

export const Email: Story = {
  args: {
    id: 'input-email',
    type: 'email',
    placeholder: '이메일 입력',
    variant: 'default'
  }
};

export const AutoId: Story = {
  args: {
    placeholder: 'id 없이 렌더링',
    variant: 'default'
  }
};
