import React from 'react';
import clsx from 'clsx';

import cls from './Textarea.module.css';

const DISPLAY_NAME = 'textarea';

export interface ITextareaProps extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  value?: string;
  type?: string;
  isError?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPressEnter?: (event: React.SyntheticEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<ITextareaProps> = ({
  value,
  type,
  isError,
  isLoading,
  isDisabled,
  placeholder,
  className,
  onChange,
  onPressEnter,
  ...nativeInputProps
}) => (
  <textarea
    {...nativeInputProps}
    className={clsx(cls.textarea, className, {
      [cls.loading]: isLoading,
      [cls.error]: isError,
      [cls.disable]: isDisabled,
    })}
    placeholder={placeholder}
    value={value}
    disabled={isDisabled || isLoading}
  />
);
Textarea.displayName = DISPLAY_NAME;
