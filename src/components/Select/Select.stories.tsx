import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MultiSelect } from './MultiSelect';
import { Select } from './Select';

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;


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
        <MultiSelect></MultiSelect>
        <Select/>
      </div>
    </div>
  ),
};
