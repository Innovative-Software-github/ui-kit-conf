import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { StatusMessage } from './StatusMessage';
import { IconType } from '../Icon/IconsMapping';

const meta: Meta<typeof StatusMessage> = {
  component: StatusMessage,
};

export default meta;
type Story = StoryObj<typeof StatusMessage>;

export const InputVariations: Story = {
  render: (args) => (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '30px',
    }}
    >
      Без иконки
      <StatusMessage {...args}>
        Тестовое значение
      </StatusMessage>

      С иконкой
      <StatusMessage {...args}>
        <StatusMessage.Icon type={IconType.Done_20} width={20} height={20} />
        Тестовое значение
      </StatusMessage>
    </div>
  ),
  args: {
    type: 'info',
  },
  argTypes: {
    type: {
      options: ['error', 'info'],
      control: {
        type: 'select',
      },
    },
  },
};
