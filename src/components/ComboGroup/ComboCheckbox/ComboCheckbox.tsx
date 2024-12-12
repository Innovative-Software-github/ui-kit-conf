import React from 'react';
import clsx from 'clsx';

import { ITagProps, Tag } from '../../Tag/Tag';

import cls from './ComboCheckbox.module.css';
import { ComboGroupContext } from '../ComboGroup';

export interface IComboCheckboxProps extends Omit<ITagProps, 'type'> {
  id: string;
  className?: string;
}

export const ComboCheckbox = React.forwardRef<HTMLLabelElement, IComboCheckboxProps>(
  (props, ref) => {
    const {
      id, children, className, ...restProps
    } = props;

    const context = React.useContext(ComboGroupContext);

    if (!context) {
      return null;
    }

    const { selectedIds, onChange } = context;

    const isChecked = selectedIds.includes(id);

    const handleChange = () => {
      onChange(id);
    };

    return (
      <label ref={ref} className={clsx(cls.comboCheckbox, className)}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          {...restProps}
        />
        <Tag className={cls.tag} type={isChecked ? 'selected' : 'default'}>
          {children}
        </Tag>
      </label>
    );
  },
);

ComboCheckbox.displayName = 'ComboCheckbox';
