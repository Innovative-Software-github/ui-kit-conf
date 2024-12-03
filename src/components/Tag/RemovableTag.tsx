import clsx from 'clsx';
import React from 'react';
import cls from './Tag.module.css';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';

interface IRemovableTagProps {
  label: string;
  onRemove?: () => void;
}

const RemovableTag = ({ label, onRemove } : IRemovableTagProps) => {
  return (
    <div className={clsx([cls.tagRemovable, cls.tagStatic, cls.tagActive])}>
      <span>{label}</span>
      <Icon type={IconType.Close_20} onClick={() => onRemove && onRemove()} />
    </div>
  );
};

export default RemovableTag;
