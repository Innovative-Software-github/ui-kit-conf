/* eslint-disable max-len */
import * as React from 'react';
import clsx from 'clsx';

import cls from './Input.module.css';

const DISPLAY_NAME = 'input';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  elPrefix?: React.ReactNode;
  elSuffix?: React.ReactNode;
  type?: string;
  isError?: boolean;
  isLoading?: boolean;
  isDisable?: boolean;
  value?: string;
  placeholder?: string;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => {
    const {
      elPrefix,
      elSuffix,
      isError,
      isLoading,
      isDisable,
      className,
      value,
      placeholder,
      type,
      ...nativeInputProps
    } = props;

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    const renderPrefix = () => {
      if (elPrefix) {
        return (
          <div className={cls.prefix}>
            {elPrefix}
          </div>
        );
      }

      return null;
    };

    const renderSuffix = () => {
      if (elSuffix) {
        return (
          <div className={cls.suffix}>
            {elSuffix}
          </div>
        );
      }

      return null;
    };

    return (
      <div className={clsx(cls.container, className, {
        [cls.error]: isError,
        [cls.loading]: isLoading,
        [cls.disable]: isDisable,
      })}
      >
        {renderPrefix()}
        <input
          type={type}
          className={cls.input}
          disabled={isDisable}
          ref={inputRef}
          placeholder={placeholder}
          {...nativeInputProps}
        />
        {renderSuffix()}
      </div>
    );
  },
);

Input.displayName = DISPLAY_NAME;

export const CheckmarkValid = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" color="inherit" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.46 18.12a2 2 0 0 0 3.08 0l.9-1.1a2 2 0 0 1 1.52-.73l1.43-.02a2 2 0 0 0 1.92-2.41l-.3-1.4a2 2 0 0 1 .38-1.64l.87-1.12a2 2 0 0 0-.69-3.01l-1.27-.64a2 2 0 0 1-1.05-1.31l-.33-1.39a2 2 0 0 0-2.79-1.34l-1.29.6a2 2 0 0 1-1.68 0l-1.3-.6a2 2 0 0 0-2.78 1.34l-.33 1.39A2 2 0 0 1 3.7 6.05l-1.27.64a2 2 0 0 0-.7 3l.88 1.13a2 2 0 0 1 .37 1.64l-.3 1.4a2 2 0 0 0 1.93 2.41l1.43.02a2 2 0 0 1 1.51.73l.9 1.1Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7.4 9.7 8.94 12l3.66-3.63" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
);
