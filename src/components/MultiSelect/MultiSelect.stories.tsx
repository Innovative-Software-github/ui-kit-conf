import React from 'react';
import type { Meta } from '@storybook/react';

import { MultiSelect } from './MultiSelect';
import { ISelectOptions } from '../Dropdown/Dropdown';

const List: ISelectOptions[] = [
  { id: '0', title: 'Apple' },
  { id: '1', title: 'Bacon' },
  { id: '2', title: 'Banana' },
  { id: '3', title: 'Broccoli' },
  { id: '4', title: 'Burger' },
  { id: '5', title: 'Cake' },
  { id: '6', title: 'Candy' },
  { id: '7', title: 'Carrot' },
];

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
};

export default meta;

export const MultiSelectStory = (args) => {
  const [selectedOptions, setSelectedOptions] = React.useState<any>([]);

  const handleOptionClick = (option: any) => {
    setSelectedOptions(option);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '40px',
          padding: '40px',
          backgroundColor: '#f0f2f5',
        }}
      >
        <div
          style={{
            maxWidth: '300px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3
            style={{
              marginBottom: '15px',
              textAlign: 'center',
              color: '#1890ff',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Поиск влияет на значение
          </h3>
          <MultiSelect
            {...args}
            options={List}
            selectedOptions={selectedOptions}
            onOptionClick={handleOptionClick}
            placeholder="Выберите поле"
          />
        </div>
      </div>
      <div
        style={{
          marginTop: '30px',
          textAlign: 'center',
          fontSize: '16px',
          color: '#595959',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <strong>Value:</strong>
        {' '}
        {selectedOptions.map((selectedOption) => selectedOption.value)}
        {' '}
        -
        {' '}
        <strong>Key:</strong>
        {' '}
        {selectedOptions.map((selectedOption) => selectedOption.key)}
      </div>
    </>
  );
};
