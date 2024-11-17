import React, { FC, ReactElement } from 'react';
import * as Ariakit from '@ariakit/react';
import clsx from 'clsx';
import { ComboboxItemCheckProps } from '@ariakit/react';
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
    <Ariakit.ComboboxLabel className={cls.comboboxLabel}>
      {label}
    </Ariakit.ComboboxLabel>
    <div className={cls.comboboxWrapper}>
      <Ariakit.Combobox
        placeholder={placeholder}
        render={(
          <Input
            className={cls.comboboxInput}
          />
)}
      />
      <Ariakit.ComboboxDisclosure
        className={cls.comboboxDisclosure}
        render={<Icon type={IconType.ArrowDown_20} width={20} height={20} />}
      />
    </div>
    <Ariakit.ComboboxPopover className={cls.comboboxPopover} gutter={4} sameWidth>
      {options.length ? (
        options.map((value) => (
          <Ariakit.ComboboxItem
            className={clsx([cls.comboboxOption, cls.comboboxLabel])}
            key={value}
            value={value}
            data-hoverable
          >
            {value}
            {optionIcon}
          </Ariakit.ComboboxItem>
        ))
      ) : (
        <div className={clsx([cls.comboboxOption, cls.comboboxLabel])}>{emptyMessage ?? 'Не найдено'}</div>
      )}
    </Ariakit.ComboboxPopover>
  </>
);
