import React from 'react';
import clsx from 'clsx';
import { ComboboxItem, ComboboxPopover } from '@ariakit/react';
import cls from './Dropdown.module.css';

export interface ISelectOption {
  id: string,
  title: string,
}

export interface IDropdownProps<GenericSelectOptions extends ISelectOption> {
  options:GenericSelectOptions[];
  selectedOption?: GenericSelectOptions;
  optionIcon?: React.ReactNode;
  emptyContent?: string;
  dropdownClassName?: string;
  onOptionClick: (option: GenericSelectOptions) => void;
  renderOption?: (
    option: GenericSelectOptions,
    isSelected?: boolean
  ) => React.ReactNode;
  getOptionKey?: (option: GenericSelectOptions) => string | number;
  getOptionValue?: (option: GenericSelectOptions) => string;
}

/**
 * Компонент Dropdown
 * Используется в Select и MultiSelect
 */
export const Dropdown = <GenericSelectOptions extends ISelectOption > ({
  options,
  selectedOption,
  optionIcon,
  emptyContent = 'Не найдено',
  dropdownClassName,
  onOptionClick,
  renderOption,
  getOptionKey = (option) => option.id,
  getOptionValue = (option) => option.title,
}: IDropdownProps<GenericSelectOptions>) => {
  const renderDropdownItem = (option: GenericSelectOptions) => {
    if (renderOption) {
      const isSelected = selectedOption === option;

      return renderOption(option, isSelected);
    }

    const isSelected = selectedOption === option;

    return (
      <div
        className={`dropdown-item ${isSelected ? 'selected' : ''}`}
        key={getOptionKey(option)}
      >
        {getOptionValue(option)}
        {optionIcon}
      </div>
    );
  };

  return (
    <ComboboxPopover
      className={clsx(cls.comboboxPopover, dropdownClassName)}
      gutter={8}
      sameWidth
    >
      {options.length > 0 ? (
        options.map((option) => {
          const key = getOptionKey(option);
          const value = getOptionValue(option);

          return (
            <ComboboxItem
              className={clsx(cls.comboboxOption, {
                [cls.selectedItem]: selectedOption === option,
              })}
              key={key}
              value={value}
              onClick={() => onOptionClick(option)}
              data-hoverable
            >
              {renderDropdownItem(option)}
            </ComboboxItem>
          );
        })
      ) : (
        <div className={cls.comboboxOption}>{emptyContent}</div>
      )}
    </ComboboxPopover>
  );
};
