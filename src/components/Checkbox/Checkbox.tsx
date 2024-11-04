import React from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';

import cls from './Checkbox.module.css';

export interface ICheckboxProps {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  label,
  checked,
  disabled = false,
  onChange,
}) => (
  <label className={clsx(cls.container, {
    [cls.checked]: checked,
    [cls.disabled]: disabled,
  })}
  >
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <span className={cls.checkbox}>
      {checked && <Icon type={IconType.Checkmark_20} height={18} width={18} /> }
    </span>
    {label && <span className={cls.label}>{label}</span>}
  </label>
);
