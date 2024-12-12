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
import { Dropdown, ISelectOptions } from '../Dropdown/Dropdown';

import cls from '../Dropdown/Dropdown.module.css';

export interface ISelectProps extends Omit<IInputProps, 'onChange' | 'value'> {
  options: ISelectOptions[];
  selectedOption: ISelectOptions;
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
  onInputChange?: (option: ISelectOptions) => void;
  onOptionClick: (option: ISelectOptions) => void;
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
export const Select:React.FC<ISelectProps> = ({
  options,
  selectedOption,
  emptyContent,
  isInputReadOnly = false,
  className,
  dropdownClassName,
  onInputChange,
  onOptionClick,
  ...inputProps
}) => {
  const [inputValue, setInputValue] = React.useState(selectedOption?.value || '');

  const isUncontrolledInput = !isInputReadOnly && !onInputChange;

  const filteredOptions = React.useMemo(() => {
    if (isInputReadOnly || !inputValue) return options;

    return matchSorter(options, inputValue, { keys: ['value'] });
  }, [inputValue, options]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
    if (!isInputReadOnly && onInputChange) {
      onInputChange({ value });
    }
  };

  const handleInputBlur = () => isUncontrolledInput && setInputValue(selectedOption?.value);

  React.useEffect(() => {
    setInputValue(selectedOption?.value);
  }, [selectedOption?.value]);

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
        onOptionClick={onOptionClick}
      />
    </ComboboxProvider>
  );
};
