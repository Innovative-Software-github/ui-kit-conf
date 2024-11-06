import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Icon, IconType } from '../..';
import Option from './ui/Option';
import { ISelectOption, Select } from './Select';

const meta: Meta<typeof Option> = {
  component: Option,
};

export default meta;
type Story = StoryObj<typeof Option>;

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
        <Select 
            options={options}
            onSelectChange={selectedOption => console.log('selected option: ', selectedOption)}
        ></Select>
      </div>
    </div>
  ),
};
