import React from 'react';
import clsx from 'clsx';
import cls from './Tag.module.css';
import SelectableTag from './SelectableTag';
import RemovableTag from './RemovableTag';

export interface ITagProps {
  type: 'static' | 'selectable' | 'removable';
  active?: boolean;
  onActiveChange?: (active: boolean) => void;
  onRemove?: () => void;
  label: string;
}

const Tag = ({
  active = false,
  onActiveChange,
  onRemove,
  label,
  type,
}: ITagProps) => {

  return (
    <>
      {type === 'selectable'
        && <SelectableTag label={label} active={active} onChange={onActiveChange} />}
      {type === 'removable'
        && <RemovableTag label={label} onRemove={onRemove} />}
      {type === 'static' && <div className={clsx(cls.tagStatic)}>{label}</div>}
    </>
  );
};

export default Tag;
