import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: { onChange: { action: 'changed' } }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    label: 'Text 입력',
    id: 'input-text',
    type: 'text',
    placeholder: '텍스트 입력'
  }
};

export const Password: Story = {
  args: {
    label: '비밀번호 입력',
    id: 'input-password',
    type: 'password',
    placeholder: '비밀번호 입력'
  }
};

export const Email: Story = {
  args: {
    label: '이메일 입력',
    id: 'input-email',
    type: 'email',
    placeholder: '이메일 입력'
  }
};

export const AutoId: Story = {
  args: {
    label: '자동 ID Input',
    placeholder: 'id 없이 렌더링'
  }
};