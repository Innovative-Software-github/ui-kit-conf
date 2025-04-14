import React from 'react';
import type { Meta } from '@storybook/react';

import { Select } from './Select';
import { ISelectOption } from '../Dropdown/Dropdown';

interface IFoodOption extends ISelectOption {
  emoji: string;
  category: string;
}

const List: IFoodOption[] = [
  {
    id: '0', title: 'Яблоко', category: 'Фрукты', emoji: '🍏',
  },
  {
    id: '1', title: 'Бекон', category: 'Мясо', emoji: '🥓',
  },
  {
    id: '2', title: 'Банан', category: 'Фрукты', emoji: '🍌',
  },
  {
    id: '3', title: 'Брокколи', category: 'Овощи', emoji: '🥦',
  },
  {
    id: '4', title: 'Бургер', category: 'Фастфуд', emoji: '🍔',
  },
  {
    id: '5', title: 'Пирог', category: 'Десерты', emoji: '🥧',
  },
  {
    id: '6', title: 'Конфета', category: 'Десерты', emoji: '🍬',
  },
  {
    id: '7', title: 'Морковь', category: 'Овощи', emoji: '🥕',
  },
];

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

export const SelectStory = (args) => {
  const [selectedOption, setSelectedOption] = React.useState<IFoodOption>(List[0]);

  const handleOptionClick = (option: IFoodOption) => setSelectedOption(option);

  const renderOption = (option: IFoodOption, isSelected: boolean) => (
    <div
      style={{
        padding: '10px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        backgroundColor: isSelected ? '#e6f7ff' : '#fff',
        borderLeft: isSelected ? '4px solid #1890ff' : '4px solid transparent',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ fontWeight: 600 }}>
        {option.emoji}
        {' '}
        {option.title}
      </div>
      <div style={{ fontSize: '12px', color: '#888' }}>
        Категория:
        {' '}
        {option.category}
      </div>
    </div>
  );

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
            renderOption={renderOption}
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
            renderOption={renderOption}
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
        {selectedOption?.title}
        {' '}
        {' '}
        <strong>emoji:</strong>
        {' '}
        {selectedOption?.emoji}
        {' '}
        {' '}
        <strong>category:</strong>
        {' '}
        {selectedOption?.category}
      </div>
    </>
  );
};
