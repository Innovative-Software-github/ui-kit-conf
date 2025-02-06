import React from 'react';
import {
  ComboboxProvider,
  Combobox,
  ComboboxDisclosure,
  ComboboxItemCheck,
} from '@ariakit/react';
import { matchSorter } from 'match-sorter';
import clsx from 'clsx';

import { IInputProps, Input } from '../Input/Input';
import { IconType } from '../Icon/IconsMapping';
import { Icon } from '../Icon/Icon';
import { Dropdown, ISelectOptions } from '../Dropdown/Dropdown';

import cls from '../Dropdown/Dropdown.module.css';

export interface IMultiSelect extends Omit<IInputProps, 'onChange' | 'value'> {
  options: ISelectOptions[];
  selectedOptions: ISelectOptions[];
  /**
   * Текст, отображаемый, если опции не найдены.
   * @default 'Не найдено'
   */
  emptyContent?: string;
  /**
   * Флаг, определяющий, является ли поле ввода только для чтения.
   * Если `true`, пользователь не может вводить значение вручную.
   * @default false
   */
  isInputReadOnly?: boolean;
  className?: string;
  /**
   * Дополнительный CSS-класс для выпадающего списка.
   */
  dropdownClassName?: string;
  onOptionClick: (options: ISelectOptions[]) => void;
}

/**
 * Компонент `MultiSelect` позволяет выбирать несколько опций из выпадающего списка
 * с возможностью фильтрации по вводу пользователя.
 *
 * **Особенности компонента:**
 *
 * - **Множественный выбор:** Пользователь может выбрать одну или несколько опций из списка.
 * - **Фильтрация опций:** При вводе текста в поле ввода опции фильтруются по соответствию.
 * - **Чтение только для чтения:** Если `isInputReadOnly` установлено в `true`, поле ввода отключено и служит только для отображения.
 * - **Настраиваемые обратные вызовы:** Используйте `onOptionClick` для обработки изменений в выбранных опциях.
 *
 * @param {IMultiSelect} props - Свойства компонента.
 * @returns {React.FC} Компонент `MultiSelect`.
 */
export const MultiSelect:React.FC<IMultiSelect> = ({
  options,
  selectedOptions,
  emptyContent,
  isInputReadOnly = false,
  className,
  dropdownClassName,
  onOptionClick,
  ...inputProps
}) => {
  const [inputValue, setInputValue] = React.useState('');

  const filteredOptions = React.useMemo(() => {
    if (isInputReadOnly || !inputValue) return options;

    return matchSorter(options, inputValue, { keys: ['value'] });
  }, [inputValue, options, isInputReadOnly]);

  const handleOptionClick = (option: ISelectOptions) => {
    const isSelected = selectedOptions.some(
      (selectedOption) => selectedOption.id === option.id,
    );

    if (isSelected) {
      onOptionClick(selectedOptions.filter((o) => o.id !== option.id));
    } else {
      onOptionClick([...selectedOptions, option]);
    }
  };

  return (
    <ComboboxProvider
      selectedValue={selectedOptions.map((selectedOption) => selectedOption.value)}
    >
      <div className={clsx(cls.comboboxWrapper, className)}>
        <Combobox
          render={(props) => (
            <Input
              {...props}
              {...inputProps}
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
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
        optionIcon={<ComboboxItemCheck />}
        dropdownClassName={dropdownClassName}
        onOptionClick={handleOptionClick}
      />
    </ComboboxProvider>
  );
};
