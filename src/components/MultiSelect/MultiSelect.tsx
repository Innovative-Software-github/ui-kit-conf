import React from 'react';
import {
  ComboboxProvider,
  Combobox,
  ComboboxDisclosure,
} from '@ariakit/react';
import { matchSorter } from 'match-sorter';
import clsx from 'clsx';

import { IInputProps, Input } from '../Input/Input';
import { IconType } from '../Icon/IconsMapping';
import { Icon } from '../Icon/Icon';
import { Dropdown, ISelectOption } from '../Dropdown/Dropdown';

import cls from '../Dropdown/Dropdown.module.css';

// Определяем дженерик для MultiSelect
export interface IMultiSelect<TOption extends ISelectOption> extends Omit<IInputProps, 'onChange' | 'value'> {
  options: TOption[]; // Опции теперь поддерживают любые типы, которые расширяют ISelectOption
  selectedOptions: (string | number)[]; // Массив выбранных опций
  emptyContent?: string;
  isInputReadOnly?: boolean;
  className?: string;
  dropdownClassName?: string;
  onOptionClick: (options: (string | number)[]) => void;
  renderOption?: (
    option: TOption,
    isSelected: boolean
  ) => React.ReactNode; // Принимаем функцию renderOption для кастомного рендеринга опций
}

// Обновлённый компонент MultiSelect с дженериками
export const MultiSelect = <TOption extends ISelectOption>({
  options,
  selectedOptions,
  emptyContent,
  isInputReadOnly = false,
  className,
  dropdownClassName,
  onOptionClick,
  renderOption, // Получаем renderOption как пропс
  ...inputProps
}: IMultiSelect<TOption>) => {
  const [inputValue, setInputValue] = React.useState('');

  const filteredOptions = React.useMemo(() => {
    if (isInputReadOnly || !inputValue) return options;

    return matchSorter(options, inputValue, { keys: ['title'] });
  }, [inputValue, options, isInputReadOnly]);

  const handleOptionClick = (option: TOption) => {
    const isSelected = selectedOptions.includes(option.id);

    if (isSelected) {
      onOptionClick(selectedOptions.filter((id) => id !== option.id));
    } else {
      onOptionClick([...selectedOptions, option.id]);
    }
  };

  const defaultRenderOption = (option: TOption, isSelected: boolean) => (
    <div
      className={clsx(cls.comboboxOption, {
        [cls.selectedItem]: isSelected,
      })}
    >
      {option.title}
      {isSelected && (
        <Icon type={IconType.Checkmark_20} width={16} height={16} />
      )}
    </div>
  );

  return (
    <ComboboxProvider
      selectedValue={selectedOptions.map(
        (id) => options.find((o) => o.id === id)?.title || '',
      )}
    >
      <div className={clsx(cls.comboboxWrapper, className)}>
        <Combobox
          render={(props) => (
            <Input
              {...props}
              {...inputProps}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              readOnly={isInputReadOnly}
              className={cls.comboboxInput}
            />
          )}
        />
        <ComboboxDisclosure
          className={cls.comboboxDisclosure}
          render={<Icon type={IconType.ArrowDown_20} width={20} height={20} />}
        />
      </div>
      <Dropdown
        options={filteredOptions}
        selectedOption={null} // Заглушка, т.к. выбор множественный
        emptyContent={emptyContent}
        dropdownClassName={dropdownClassName}
        onOptionClick={handleOptionClick}
        renderOption={renderOption || defaultRenderOption} // Используем переданный renderOption или дефолтный
      />
    </ComboboxProvider>
  );
};
