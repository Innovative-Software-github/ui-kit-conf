import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Spinner } from './Spinner';
import { spinnerSize } from './utils';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const SpinnerStory: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
    >
      <div style={{
        display: 'flex',
        gap: '30px',
        alignItems: 'flex-end',
        padding: '50px',
        borderRadius: '10px',
        background: '#DADADA',

      }}
      >
        XXL
        <Spinner size="xxl" />
        XL
        <Spinner size="xl" />
        L
        <Spinner size="l" />
        M
        <Spinner size="m" />
        S
        <Spinner size="s" />
        XS
        <Spinner size="xs" />
      </div>
    </div>
  ),
  argTypes: {
    size: {
      type: 'string',
      className: 'filed',
      options: [...Object.values(spinnerSize)],
      control: {
        type: 'select',
      },
    },
  },
};
