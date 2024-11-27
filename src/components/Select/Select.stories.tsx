import React from 'react';
import type { Meta } from '@storybook/react';

import { Select } from './Select';
import { ISelectOptions } from '../Dropdown/Dropdown';

const List: ISelectOptions[] = [
  { key: '0', value: 'Яблоко' },
  { key: '1', value: 'Бекон' },
  { key: '2', value: 'Банан' },
  { key: '3', value: 'Брокколи' },
  { key: '4', value: 'Бургер' },
  { key: '5', value: 'Пирог' },
  { key: '6', value: 'Конфета' },
  { key: '7', value: 'Морковь' },
];

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

export const SelectStory = (args) => {
  const [selectedOption, setSelectedOption] = React.useState<ISelectOptions>();

  const handleInputChange = (option: any) => setSelectedOption(option);

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
            Поиск влияет на значение
          </h3>
          <Select
            {...args}
            options={List}
            selectedOption={selectedOption}
            emptyContent="Не найдено"
            onOptionClick={handleOptionClick}
            onInputChange={handleInputChange}
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
        <strong>Value:</strong>
        {' '}
        {selectedOption?.value?.toString()}
        {' '}
        -
        {' '}
        <strong>Key:</strong>
        {' '}
        {selectedOption?.key?.toString()}
      </div>
    </>
  );
};
