import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './SingleSelect/Select';
import { MultiSelect } from './MultiSelect/MultiSelect';
import list from './list';

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
        <Select 
          options={list} 
          onSelectChange={newSelection => console.log(newSelection)}
          label={'Choose one'}
          placeholder={'Введите...'}
        />
        <MultiSelect
          options={list}
          onSelectChange={newSelection => console.log(newSelection)}
          label={'Choose many'}
          emptyMessage={'Не найдено'}
          placeholder={'Введите...'}

         />
      </div>
    </div>
  ),
};
