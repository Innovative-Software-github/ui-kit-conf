import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { IconType } from '../Icon/IconsMapping';
import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner/Spinner';

import cls from './Button.module.css';

const DISPLAY_NAME = 'Button';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  className?: string;
  variant: 'filed' | 'outlined' | 'text';
  icon?: IconType;
  isError?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  paddingClass?: boolean;
  type?: 'button' | 'submit' | 'reset',
  size?: 'M' | 'L'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    children,
    className,
    icon,
    isError,
    isLoading,
    isDisabled,
    disabled,
    variant,
    size = 'L',
    type = 'button',
    onClick,
    ...restProps
  } = props;

  return (
    <button
      {...restProps}
      ref={ref}
      data-variant={variant}
      data-size={size}
      type={type ? 'button' : 'submit'}
      className={clsx(cls.button, className, {
        [cls.error]: isError,
        [cls.loading]: isLoading,
        [cls.disable]: isDisabled,
        [cls.paddingClass]: !!icon,
      })}
      onClick={onClick}
    >
      {isLoading ? (
        <Spinner className={cls.loadingSpinner} size="m" />
      ) : (
        icon && <Icon width={20} height={20} type={icon} />
      )}
      {children}
    </button>
  );
});

Button.displayName = DISPLAY_NAME;
