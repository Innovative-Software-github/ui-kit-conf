import React, { useState } from 'react';
import clsx from 'clsx';
import cls from './Tag.module.css';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';

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
      {selectable && <div className={clsx(cls.tagStatic, cls.tagSelectable, { [cls.tagActive]: isActive })} onClick={() => onSelectableTagChange()}>{label}</div>}
      {isRemovableTag()
        &&
        <div className={clsx([cls.tagRemovable, cls.tagStatic, cls.tagActive])}>
          <span>{label}</span>
          <Icon type={IconType.Close_20} onClick={() => onRemove()} />
        </div>
      }
      {isStaticTag() && <div className={clsx(cls.tagStatic)}>{label}</div>}
    </>
  );
};

export default Tag;
