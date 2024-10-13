import React from 'react';
import { clsx } from 'clsx';
import cls from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType?: 'filed' | 'outlined' | 'text';
  icon?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
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
    <div>
      {icon}
    </div>
    {children}
  </button>
);
