import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  component: Notification,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'critical'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
  },
};

export const Critical: Story = {
  args: {
    type: 'critical',
  },
};
