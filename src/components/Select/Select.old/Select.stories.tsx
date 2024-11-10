import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ISelectOption, Select } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const options: ISelectOption[] = [
    { title: 'Opt1', value: 'opt1' },
    { title: 'Opt2', value: 'opt2' },
    { title: 'Opt3', value: 'opt3' },
    { title: 'Opt4', value: 'opt4' },
]

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
        <Select<ISelectOption>
            options={options}
            mode='single'
            onSelectChange={(selectedOptions) => console.log('selected option: ', selectedOptions)}
        >
        </Select>
      </div>
    </div>
  ),
};
