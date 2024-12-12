import React from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';

import cls from './Tag.module.css';

export type TTagsVariants = 'default' | 'selected';

export interface ITagProps extends React.PropsWithChildren {
  type: TTagsVariants;
  className?: string;
}

export const Tag = React.forwardRef<HTMLDivElement, ITagProps>(
  ({ type, className, children }, ref) => {
    const closeButton = type === 'selected' && (
      <Icon type={IconType.Close_20} width={20} height={20} />
    );

    return (
      <div
        ref={ref}
        className={clsx(cls.tag, className)}
        data-variant={type}
      >
        {children}
        {closeButton}
      </div>
    );
  },
);

Tag.displayName = 'Tag';
