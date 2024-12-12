import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

import { IconType } from '../Icon/IconsMapping';
import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner/Spinner';

import cls from './Button.module.css';

const DISPLAY_NAME = 'Button';

export type TButtonSize = 'M' | 'L';
export type TButtonVariant = 'default' | 'outlined' | 'text';

type TButtonHTMLAttributes = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>

export interface IButtonProps extends TButtonHTMLAttributes, React.PropsWithChildren {
  className?: string;
  variant: TButtonVariant;
  size?: TButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIconType?: IconType;
  rightIconType?: IconType
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    children,
    className,
    isLoading,
    isDisabled,
    variant = 'default',
    size = 'L',
    rightIconType,
    leftIconType,
    onClick,
    ...restProps
  } = props;

  const hasIcon = !!rightIconType || !!leftIconType;

  const spinner = (isLoading ? (
    <Spinner className={cls.spinner} size={size === 'M' ? 's' : 'm'} />
  ) : null
  );

  const rightIcon = ((rightIconType && leftIconType && spinner)
  || (rightIconType && !leftIconType && spinner)
  || (rightIconType && (
    <Icon
      type={rightIconType}
      data-size={size}
      width={20}
      height={20}
      className={cls.icon}
    />
  )));

  const leftIcon = ((!hasIcon && spinner)
  || (leftIconType && !rightIconType && spinner)
  || (leftIconType && (
    <Icon
      type={leftIconType}
      data-size={size}
      width={20}
      height={20}
      className={cls.icon}
    />
  )));

  return (
    <button
      type="button"
      {...restProps}
      className={clsx(cls.button, className)}
      ref={ref}
      data-variant={variant}
      data-size={size}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
});

Button.displayName = DISPLAY_NAME;
