import React from 'react';
import { clsx } from 'clsx';
import { IconType } from '../Icon/IconsMapping';
import { Icon } from '../Icon/Icon';
import cls from './Button.module.css';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType?: 'filed' | 'outlined' | 'text';
  icon?: IconType;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  className,
  onClick,
  buttonType,
  icon,
  isLoading,
  disabled,
  ...props
}) => (
  <button
    type="button"
    className={clsx(
      cls.button,
      { [cls.filed]: buttonType === 'filed' },
      { [cls.outlined]: buttonType === 'outlined' },
      { [cls.text]: buttonType === 'text' },
    )}
    onClick={onClick}
    disabled={disabled || isLoading}
    {...props}
  >
    {icon && (
    <div>
      <Icon type={icon} />
    </div>
    )}
    {children}
  </button>
);
