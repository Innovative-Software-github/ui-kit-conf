import React from 'react';
import { clsx } from 'clsx';

import { Icon } from '../Icon/Icon';
import { Spinner } from '../Spinner/Spinner';
import { IButtonBase } from '../Button/Button';

import cls from './LinkButton.module.css';

const DISPLAY_NAME = 'Link-button';

export type TButtonSize = 'M' | 'L';
export type TButtonVariant = 'default' | 'outlined' | 'text';

type TButtonHTMLAttributes = Omit<React.ButtonHTMLAttributes<HTMLAnchorElement>, 'href' | 'disabled'>

export interface IButtonProps extends TButtonHTMLAttributes, React.PropsWithChildren, IButtonBase {
url: string;
  isExternalLink: boolean;
}

export const LinkButton: React.FC<IButtonProps> = ((props) => {
  const {
    children,
    className,
    isLoading,
    isDisabled,
    variant = 'default',
    size = 'L',
    rightIconType,
    leftIconType,
    isExternalLink,
    url,
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
    <a
      type="button"
      {...restProps}
      className={clsx(cls.linkButton, className)}
      data-variant={variant}
      data-size={size}
      aria-disabled={isDisabled || isLoading}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      target={isExternalLink ? '_blank' : undefined}
      href={url}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  );
});

LinkButton.displayName = DISPLAY_NAME;
