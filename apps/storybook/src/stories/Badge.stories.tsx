import type { Meta, StoryObj } from '@storybook/react-vite';
import Badge from '@repo/ui/badge';

const meta = {
  title: 'Example/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger']
    }
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary'
  }
};

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success'
  }
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning'
  }
};


