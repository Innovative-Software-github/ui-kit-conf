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

export interface ISelectProps<TOption extends ISelectOption> extends Omit<IInputProps, 'onChange' | 'value'> {
  options: TOption[];
  selectedOption: TOption;
  /**
   * Текст, отображаемый, если опции не найдены.
   * @default 'Не найдено'
   */
  emptyContent?: string;
  /**
   * Если `true`, поле ввода будет только для чтения.
   * Используется, если нужно отключить возможность ввода текста.
   * @default false
   */
  isInputReadOnly?: boolean;
  className?: string;
  /**
   * Дополнительный CSS-класс для выпадающего списка.
   */
  dropdownClassName?: string;
  /**
   * Функция для создания кастомного элемента DropDown
   *
   * @param option - сам список элементов
   * @param isSelected - состояние выбранного элемента
   * @returns компонент DropDown (React.ReactNode)
   */
  // Для Dropdown
  getOptionKey?: (option: TOption) => string | number;
  getOptionValue?: (option: TOption) => string;
  renderOption?: (
    option: TOption,
    isSelected: boolean
  ) => React.ReactNode;

  onInputChange?: (option:TOption) => void;
  onOptionClick: (option: TOption) => void;
}

/**
 * Компонент `Select`
 *
 * **Состояния компонента:**
 *
 * 1. **Без `onInputChange`:**<br/>
 *    Если `onInputChange` не передан, поле ввода используется только для фильтрации доступных опций.
 *    Пользовательский ввод не обрабатывается, выбор осуществляется из списка фильтрованных опций.
 *
 * 2. **Свойство `isInputReadOnly`:**<br/>
 *    Если `isInputReadOnly` установлено в `true`, поле ввода отключено и находится в режиме только для чтения.
 *    Пользователь не может вводить значения, выбор доступен только из предоставленного списка опций.
 *
 * @param {ISelectProps} props - Свойства компонента.
 * @returns {React.FC} Компонент `Select`.
 */
export const Select = <TOption extends ISelectOption>({
  options,
  selectedOption,
  getOptionKey = (option) => option.id,
  getOptionValue = (option) => option.title,
  emptyContent,
  isInputReadOnly = false,
  className,
  dropdownClassName,
  renderOption,
  onInputChange,
  onOptionClick,
  ...inputProps
}: ISelectProps<TOption>) => {
  const [inputValue, setInputValue] = React.useState(getOptionValue(selectedOption));

  const isUncontrolledInput = !isInputReadOnly && !onInputChange;

  const filteredOptions = React.useMemo(() => {
    if (isInputReadOnly || !inputValue) return options;

    return matchSorter(options, inputValue, {
      keys: [(item) => getOptionValue(item)],
    });
  }, [inputValue, options, getOptionValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
    if (!isInputReadOnly && onInputChange) {
      onInputChange({ ...selectedOption, title: value });
    }
  };

  const handleInputBlur = () => isUncontrolledInput && setInputValue(getOptionValue(selectedOption));

  React.useEffect(() => {
    setInputValue(getOptionValue(selectedOption));
  }, [getOptionValue(selectedOption)]);

  return (
    <ComboboxProvider>
      <div className={clsx(cls.comboboxWrapper, className)}>
        <Combobox
          render={(props) => (
            <Input
              {...props}
              {...inputProps}
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              readOnly={isInputReadOnly}
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
        selectedOption={selectedOption}
        dropdownClassName={dropdownClassName}
        renderOption={renderOption}
        onOptionClick={onOptionClick}
        getOptionKey={getOptionKey}
        getOptionValue={getOptionValue}
      />
    </ComboboxProvider>
  );
};
