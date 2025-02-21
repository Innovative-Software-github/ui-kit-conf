import React from 'react';
import type { Meta } from '@storybook/react';

import { Select } from './Select';
import { ISelectOptions } from '../Dropdown/Dropdown';

const List: ISelectOptions[] = [
  { id: '0', title: 'Яблоко' },
  { id: '1', title: 'Бекон' },
  { id: '2', title: 'Банан' },
  { id: '3', title: 'Брокколи' },
  { id: '4', title: 'Бургер' },
  { id: '5', title: 'Пирог' },
  { id: '6', title: 'Конфета' },
  { id: '7', title: 'Морковь' },
];

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

export const SelectStory = (args) => {
  const [selectedOption, setSelectedOption] = React.useState<ISelectOptions>();

  console.log(selectedOption);

  const handleOptionClick = (option: ISelectOptions) => setSelectedOption(option);

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
            Поиск только фильтрует
          </h3>
          <Select
            {...args}
            options={List}
            selectedOption={selectedOption}
            emptyContent="Не найдено"
            onOptionClick={handleOptionClick}
            placeholder="Выберите опцию"
          />
        </div>

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
            Поле ввода отключено
          </h3>
          <Select
            {...args}
            options={List}
            selectedOption={selectedOption}
            emptyContent="Не найдено"
            isInputReadOnly
            onOptionClick={handleOptionClick}
            placeholder="Выберите опцию"
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
        <strong>title:</strong>
        {' '}
        {selectedOption?.title?.toString()}
        {' '}
        -
        {' '}
        <strong>Key:</strong>
        {' '}
        {selectedOption?.id?.toString()}
      </div>
    </>
  );
};
