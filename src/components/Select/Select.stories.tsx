import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './SingleSelect/Select';
import { MultiSelect } from './MultiSelect/MultiSelect';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;


export const InputVariations: Story = {
    
  render: (args) => (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '30px',
    }}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '50px'
      }}
      >
        <Select/>
        <MultiSelect/>
      </div>
    </div>
  ),
};
