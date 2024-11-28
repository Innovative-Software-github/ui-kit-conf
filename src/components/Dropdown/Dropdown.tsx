import React from 'react';
import clsx from 'clsx';
import { ComboboxItem, ComboboxPopover } from '@ariakit/react';

import cls from './Dropdown.module.css';

export interface ISelectOptions {
  key?: string;
  value: string;
}

export interface IDropdownProps {
  options: ISelectOptions[];
  selectedOption?: ISelectOptions;
  optionIcon?: React.ReactNode;
  emptyContent?: string;
  dropdownClassName?: string;
  onOptionClick: (option: ISelectOptions | ISelectOptions[]) => void;
}

/**
 * Компонент Dropdown
 * Используется в Select и MultiSelect
 */
export const Dropdown: React.FC<IDropdownProps> = ({
  options,
  selectedOption,
  optionIcon,
  emptyContent = 'Не найдено',
  dropdownClassName,
  onOptionClick,
}) => (
  <ComboboxPopover className={clsx(cls.comboboxPopover, dropdownClassName)} gutter={8} sameWidth>
    {options.length ? (
      options.map((option) => (
        <ComboboxItem
          className={clsx(cls.comboboxOption, {
            [cls.selectedItem]: selectedOption?.key === option?.key,
          })}
          key={option.key}
          value={option.value}
          onClick={() => onOptionClick(option)}
          data-hoverable
        >
          {option.value}
          {optionIcon}
        </ComboboxItem>
      ))
    ) : (
      <div className={cls.comboboxOption}>{emptyContent}</div>
    )}
  </ComboboxPopover>
);
