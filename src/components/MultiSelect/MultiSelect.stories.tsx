import React from 'react';
import type { Meta } from '@storybook/react';
import { MultiSelect } from './MultiSelect';
import { ISelectOption } from '../Dropdown/Dropdown';

const List: ISelectOption[] = [
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
  const [selectedOptions, setSelectedOptions] = React.useState<(string | number)[]>([]);

  const handleOptionClick = (optionIds: (string | number)[]) => {
    setSelectedOptions(optionIds);
  };

  const selectedTitles = selectedOptions
    .map((id) => List.find((option) => option.id === id)?.title)
    .filter(Boolean)
    .join(', ');

  const renderOption = (option: ISelectOption) => {
    const isSelected = selectedOptions.includes(option.id);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          gap: '10px',
          backgroundColor: isSelected ? '#e6f7ff' : 'transparent', // Цвет фона для выбранных опций
        }}
      >
        {isSelected && (
          <span
            style={{
              color: '#1890ff',
              fontWeight: 'bold',
            }}
          >
            Good
          </span>
        )}
        {' '}
        {/* Текст 'vjlpb' для выбранных опций */}
        <span>{option.title}</span>
      </div>
    );
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
            renderOption={renderOption}
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
        <strong>Выбранные ID:</strong>
        {' '}
        {selectedOptions.join(', ')}
        <br />
        <strong>Выбранные значения:</strong>
        {' '}
        {selectedTitles}
      </div>
    </>
  );
};
