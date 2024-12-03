import React, { useState } from 'react';
import clsx from 'clsx';
import cls from './Tag.module.css';

interface ITagProps {
  selectable?: boolean;
  active?: boolean;
  removable?: boolean;
  onActiveChange?: () => void;
  onRemove?: () => void;
  label: string;
}

const Tag = ({
  selectable = false,
  active = false,
  removable = false,
  onActiveChange,
  onRemove,
  label,
}): React.JSX.Element => {

  const [isActive, setIsActive] = useState(active);
  const isRemovableTag = (): boolean => removable && active;
  const isStaticTag = (): boolean => !removable && !selectable;

  const onSelectableTagChange = () => {
    setIsActive(!isActive);
    if (onActiveChange) onActiveChange();
  };

  return (
    <>
      {selectable && <div className={clsx(cls.tagStatic, cls.tagSelectable, { [cls.tagActive]: isActive })} onClick={() => onSelectableTagChange()}>Selectable Tag</div>}
      {isRemovableTag() && <div className={clsx([cls.tagStatic, cls.tagActive])} onClick={onRemove()}>Removable tag</div>}
      {isStaticTag() && <div className={clsx(cls.tagStatic)}>Static Tag</div>}
    </>
  );
};

export default Tag;
