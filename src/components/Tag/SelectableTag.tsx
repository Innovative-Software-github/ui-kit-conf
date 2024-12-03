import clsx from 'clsx';
import React, { useState } from 'react';
import cls from './Tag.module.css';

interface ISelectableTagProps {
  active?: boolean;
  onChange?: (active: boolean) => void;
  label: string;
}

const SelectableTag = ({ active, onChange, label } : ISelectableTagProps) => {
  const [isActive, setIsActive] = useState(active);

  const onSelectableTagChange = () => {
    const newActive = !isActive;

    setIsActive(newActive);
    if (onChange) onChange(newActive);
  };

  return (
    <div
      className={clsx(cls.tagStatic, cls.tagSelectable, { [cls.tagActive]: isActive })}
      onClick={() => onSelectableTagChange()}
    >
      {label}
    </div>
  );
};

export default SelectableTag;
