import React from 'react';
import clsx from 'clsx';

import cls from './Input.module.css';
import { Spinner } from '../Spinner/Spinner';

const DISPLAY_NAME = 'input';

export type TInputSize = 'L' | 'M';

export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value: string;
  type?: string;
  size?: TInputSize;
  isError?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  elPrefix?: React.ReactNode;
  elSuffix?: React.ReactNode;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onPressEnter?(event: React.SyntheticEvent<HTMLInputElement>): void;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => {
    const {
      value,
      type,
      size = 'L',
      className,
      isError,
      isLoading,
      isDisabled,
      elPrefix,
      elSuffix,
      placeholder,
      autoComplete,
      onChange,
      onKeyDown,
      onPressEnter,
      ...nativeInputProps
    } = props;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onPressEnter) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    const renderPrefix = () => elPrefix && <div className={cls.prefix}>{elPrefix}</div>;

    const renderSuffix = () => (isLoading ? (
      <Spinner className={cls.loadingSpinner} size="m" />
    ) : (
      elSuffix && <div className={cls.suffix}>{elSuffix}</div>
    ));

    return (
      <div
        className={clsx(cls.container, className, {
          [cls.error]: isError,
          [cls.loading]: isLoading,
          [cls.disable]: isDisabled,
        })}
        data-size={size}
      >
        {renderPrefix()}
        <input
          {...nativeInputProps}
          ref={ref}
          placeholder={placeholder}
          type={type}
          className={cls.input}
          value={value}
          disabled={isDisabled || isLoading}
          autoComplete={autoComplete}
          onKeyDown={handleKeyDown}
          onChange={onChange}
        />
        {renderSuffix()}
      </div>
    );
  },
);

Input.displayName = DISPLAY_NAME;
