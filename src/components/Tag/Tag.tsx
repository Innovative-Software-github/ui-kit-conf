import React, { forwardRef, useState, useCallback } from 'react';
import { clsx } from 'clsx';
import cls from './Tag.module.css';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';

const DISPLAY_NAME = 'Tag';

export type TTagSize = 'M' | 'L';
export interface ITagProps extends React.HTMLAttributes<HTMLElement> {
  children?: string;
  className?: string;
  size?: TTagSize;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Tag = forwardRef<HTMLElement, ITagProps>((props, ref) => {
  const {
    children,
    className,
    size = 'L',
    onClick,
    ...restProps
  } = props;

  const [selected, setSelected] = useState(false);

  const handleToggleSelection = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setSelected((prev) => !prev);
    if (onClick) {
      onClick(event);
    }
  }, [onClick]);

  const handleClose = useCallback(() => {
    setSelected(false);
  }, []);

  const tagClass = clsx(
    cls.tagContainer,
    cls[size],
    {
      [cls.selected]: selected,
    },
    className,
  );

  return (
    <button
      type="button"
      className={tagClass}
      ref={ref}
      onClick={handleToggleSelection}
      {...restProps}
      aria-pressed={selected}
    >
      <span className={clsx(cls.tag)}>{children}</span>
      {selected && (
        <span
          className={cls.closeIcon}
          onClick={handleClose}
        >
          <Icon type={IconType.Close_20} width={20} height={20} />
        </span>
      )}
    </button>
  );
});

Tag.displayName = DISPLAY_NAME;
