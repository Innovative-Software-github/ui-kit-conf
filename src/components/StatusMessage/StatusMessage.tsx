import * as React from 'react';
import clsx from 'clsx';
import { StatusMessageIcon } from './StatusMessageIcon';

import cls from './StatusMessage.module.css';

export type TStatusMessageVariant = 'error' | 'info';

export interface IStatusMessageProps extends React.PropsWithChildren {
  className?: string;
  type?: TStatusMessageVariant;
}

interface IStatusMessageComposition {
  Icon: typeof StatusMessageIcon;
}

export const StatusMessage: React.FC<IStatusMessageProps> & IStatusMessageComposition = ({
  className,
  type,
  children,
}) => (
  <div
    className={clsx(cls.container, cls[type], className)}
  >
    {children}
  </div>
);

StatusMessage.Icon = StatusMessageIcon;
