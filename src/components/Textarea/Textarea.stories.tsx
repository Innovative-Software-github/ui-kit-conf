import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const InputVariations: Story = {
  render: (args) => (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '30px',
    }}
    >
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <Textarea
          {...args}
          placeholder="Placeholder"
        />
      </div>
    </div>
  ),
  args: {
    isError: false,
    isLoading: false,
    isDisabled: false,
    type: 'text',
    onPressEnter: (e) => console.log(e.currentTarget.value),
    onChange: (event) => console.log(event.target.value),
  },
};
