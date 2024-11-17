import React, { FC, ReactElement } from 'react';
import {
  Combobox, ComboboxDisclosure, ComboboxItem, ComboboxLabel, ComboboxPopover,
  ComboboxItemCheckProps,
} from '@ariakit/react';
import clsx from 'clsx';
import cls from './CommonSelect.module.css';
import { Input } from '../Input/Input';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';
import { SelectProps } from './types/SelectProps';

interface CommonSelectProps extends SelectProps {
  optionIcon?: ReactElement<ComboboxItemCheckProps>;
}

export const CommonSelect: FC<CommonSelectProps> = ({
  options,
  optionIcon,
  label,
  emptyMessage,
  placeholder,
}) => (
  <>
    <ComboboxLabel className={cls.comboboxLabel}>
      {label}
    </ComboboxLabel>
    <div className={cls.comboboxWrapper}>
      <Combobox
        placeholder={placeholder}
        render={(
          <Input
            className={cls.comboboxInput}
          />
)}
      />
      <ComboboxDisclosure
        className={cls.comboboxDisclosure}
        render={<Icon type={IconType.ArrowDown_20} width={20} height={20} />}
      />
    </div>
    <ComboboxPopover className={cls.comboboxPopover} gutter={4} sameWidth>
      {options.length ? (
        options.map((value) => (
          <ComboboxItem
            className={clsx([cls.comboboxOption, cls.comboboxLabel])}
            key={value}
            value={value}
            data-hoverable
          >
            {value}
            {optionIcon}
          </ComboboxItem>
        ))
      ) : (
        <div className={clsx([cls.comboboxOption, cls.comboboxLabel])}>{emptyMessage ?? 'Не найдено'}</div>
      )}
    </ComboboxPopover>
  </>
);
