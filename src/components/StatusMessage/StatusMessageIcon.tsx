import React from 'react';
import clsx from 'clsx';

import { Icon, IIconProps } from '../Icon/Icon';

import cls from './StatusMessage.module.css';

export const StatusMessageIcon: React.FC<IIconProps> = ({
  className,
  ...props
}) => (
  <Icon
    className={clsx(cls.icon, className)}
    {...props}
  />
);
