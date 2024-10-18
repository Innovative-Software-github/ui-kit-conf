import * as React from 'react';
import clsx from 'clsx';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';

import cls from './Input.module.css';

const DISPLAY_NAME = 'input';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  type?: string;
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
      <Icon className={cls.loadingSpinner} type={IconType.Checkmark_20} width={20} height={20} />
    ) : (
      elSuffix && <div className={cls.suffix}>{elSuffix}</div>
    ));

    return (
      <div className={clsx(cls.container, className, {
        [cls.error]: isError,
        [cls.loading]: isLoading,
        [cls.disable]: isDisabled,
      })}
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
