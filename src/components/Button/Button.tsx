/* eslint-disable react/button-has-type */
import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { IconType } from '../Icon/IconsMapping';
import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner/Spinner';

import cls from './Button.module.css';

const DISPLAY_NAME = 'Button';

export type TButtonType = 'button' | 'submit' | 'reset';
export type TButtonSize = 'M' | 'L';
export type TButtonVariant = 'filed' | 'outlined' | 'text';
export interface IButtonProps extends React.ReactNode<HTMLButtonElement> {
  children?: string;
  className?: string;
  variant: TButtonVariant;
  icon?: IconType;
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: TButtonType;
  size?: TButtonSize;
  leftIconType?: IconType;
  rightIconType?: IconType
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    children,
    className,
    icon,
    isLoading,
    isDisabled,
    variant = 'filed',
    size = 'L',
    type = 'button',
    rightIconType,
    leftIconType,
    onClick,
    ...restProps
  } = props;

  const hasIcon = !!rightIconType || !!leftIconType;

  const spinner = (isLoading ? (
    <Spinner className={clsx(cls.loadingSpinner)} size={size === 'M' ? 's' : undefined} />
  ) : null
  );

  // eslint-disable-next-line max-len
  const rightIcon = ((rightIconType && leftIconType && spinner) || (rightIconType && !leftIconType && spinner) || (rightIconType && (
    <Icon
      type={IconType.ArrowLeft_20}
      data-size={size}
      width={size === 'M' ? 14 : undefined}
      className={clsx(cls.rightIcon)}
    />
  )));

  const leftIcon = ((!hasIcon && spinner)
  || (leftIconType && !rightIconType && spinner) || (leftIconType && (
    <Icon
      type={IconType.ArrowLeft_20}
      data-size={size}
      width={size === 'M' ? 14 : undefined}
      className={clsx(cls.leftIcon)}
    />
  )));

  return (
    <button
      className={clsx(cls.button, className, {
        [cls.loading]: isLoading,
        [cls.disable]: isDisabled,
      })}
      {...restProps}
      ref={ref}
      data-variant={variant}
      data-size={size}
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
});

Button.displayName = DISPLAY_NAME;
