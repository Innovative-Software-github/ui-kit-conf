import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';
import clx from './Checkbox.module.css';

interface ICheckboxProps {
    label: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newChecked = e.currentTarget.checked;

      setIsChecked(newChecked);
      if (onChange) {
        onChange(newChecked);
      }
    }
  };

  return (
    <label className={clsx(clx.checkboxContainer, {
      [clx.disabled]: disabled,
      [clx.active]: !disabled,
    })}
    >
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className={clx.checkboxInput}
      />
      <span className={clsx(clx.checkboxIcon, {
        [clx.checked]: isChecked,
        [clx.unchecked]: !isChecked,
      })}
      >
        {isChecked ? <Icon type={IconType.Checkmark_20} height={15} width={15} /> : ''}
      </span>
      <span className={clx.checkboxLabel}>{label}</span>
    </label>
  );
};
