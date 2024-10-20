import * as React from 'react';
import { clsx } from 'clsx';

import { StatusMessage } from '../StatusMessage/StatusMessage';

import cls from './FieldWrapper.module.css';
import { IconType } from '../Icon/IconsMapping';
import { StatusMessageIcon } from '../StatusMessage/StatusMessageIcon';

export type TFieldWrapperSize = 'M' | 'L';

export type TFieldWrapperType = 'info' | 'loading' | 'error' | 'disabled';

interface IFieldWrapperProps {
  type: TFieldWrapperType;
  children: React.ReactNode;
  label?: string;
  text?: React.ReactNode;
  size?: TFieldWrapperSize;
  icon?: IconType;
  iconWidth?: number;
  iconHeight?: number;
  className?: string;
}

const DISPLAY_NAME = 'FieldWrapper';

export const FieldWrapper: React.FC<IFieldWrapperProps> = (props) => {
  const {
    type,
    className,
    children,
    label,
    text,
    icon,
    iconWidth,
    iconHeight,
    size = 'M',
  } = props;

  const getStatusMessageContent = () => text || '';

  const messageContent = getStatusMessageContent();

  return (
    <div
      className={clsx(cls.fieldWrapper, className)}
      data-size={size}
      data-type={type}
    >
      {label && (
      <StatusMessage
        className={cls.label}
        type={type === 'error' ? 'error' : 'info'}
      >
        {label}
      </StatusMessage>
      )}
      {children}
      {messageContent && (
        <StatusMessage
          className={cls.statusMessage}
          type={type === 'error' ? 'error' : 'info'}
        >
          {icon && (
          <StatusMessageIcon
            className={cls.icon}
            type={icon}
            width={iconWidth}
            height={iconHeight}
          />
          )}
          {messageContent}
        </StatusMessage>
      )}
    </div>
  );
};

FieldWrapper.displayName = DISPLAY_NAME;
