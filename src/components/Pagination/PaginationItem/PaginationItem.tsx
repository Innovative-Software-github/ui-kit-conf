import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

import cls from './PaginationItem.module.css';

export interface IPaginationItem extends PropsWithChildren {
  page: number;
  IsAnimationDisabled: boolean;
  onClick: () => void;
}

export const PaginationItem: React.FC<IPaginationItem> = ({
  page,
  children,
  IsAnimationDisabled,
  onClick,
}) => (
  <button
    className={clsx(cls.button, {
      [cls.active]: page === children,
      [cls.disabledTransition]: IsAnimationDisabled,
    })}
    type="button"
    onClick={onClick}
  >
    <span className={cls.text}>
      {children}
    </span>
  </button>
);
