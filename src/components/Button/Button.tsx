import React from 'react';
import cls from './Button.module.css';

export const Button = ({
  children,
  className,
  onClick,
  type,
  icon,
  ...props
}) => (
  <button
    className={cls.button}
    type={type}
    onClick={onClick}
    {...props}
  >
    {icon}
    {children}
  </button>
);
