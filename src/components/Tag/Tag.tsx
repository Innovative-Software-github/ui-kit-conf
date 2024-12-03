import React, { useState } from 'react';
import clsx from 'clsx';
import cls from './Tag.module.css';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';
import SelectableTag from './SelectableTag';

export interface ITagProps {
  type: 'static' | 'selectable' | 'removable';
  selectable?: boolean;
  active?: boolean;
  removable?: boolean;
  onActiveChange?: (active: boolean) => void;
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
  type,
}: ITagProps) => {

  const [isActive, setIsActive] = useState(active);
  const isRemovableTag = (): boolean => removable && active;
  const isStaticTag = (): boolean => !removable && !selectable;

  const onSelectableTagChange = () => {
    const newActiveStatus = !isActive;

    setIsActive(newActiveStatus);
    if (onActiveChange) onActiveChange(newActiveStatus);
  };

  return (
    <>
      {type === 'selectable'
        && <SelectableTag label={label} active={active} onChange={(active) => onActiveChange(active)} />}
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
