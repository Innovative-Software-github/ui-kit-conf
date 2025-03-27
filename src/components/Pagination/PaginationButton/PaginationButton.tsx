import React from 'react';
import { Icon } from '../../Icon/Icon';
import { IconType } from '../../Icon/IconsMapping';

import cls from './PaginationButton.module.css';

export interface IPaginationButton {
  variant: 'previous' | 'next';
  disabled: boolean;
  onClick: () => void;
}

export const PaginationButton: React.FC<IPaginationButton> = ({
  variant,
  disabled,
  onClick,
}) => {
  const text = variant === 'next' ? 'Дальше' : 'Назад';
  const leftIcon = variant === 'previous' ? <Icon type={IconType.ArrowLeft_20} width={20} height={20} /> : null;
  const rightIcon = variant === 'next' ? <Icon type={IconType.ArrowRight_20} width={20} height={20} /> : null;

  return (
    <button
      className={cls.button}
      data-side={variant}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </button>
  );
};
