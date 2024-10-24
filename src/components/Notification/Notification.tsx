import React from 'react';
import clsx from 'clsx';
import clx from './Notification.module.css';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';

type NotificationType = 'success' | 'critical';

interface INotificationProps {
    type: NotificationType;
}

export const Notification: React.FC<INotificationProps> = ({ type }) => {
  let message: string;
  let iconType: IconType;

  switch (type) {
    case 'success':
      message = 'Событие успешно опубликовано';
      iconType = IconType.Checkmark_20;
      break;
    case 'critical':
      message = 'Не удалось опубликовать событие. Попробуйте еще раз';
      iconType = IconType.Close_20;
      break;
    default:
      message = '';
  }

  return (
    <div className={clsx(clx.notification, clx[type])}>
      <div className={clx.iconContainer}>
        <Icon type={iconType} />
      </div>
      <div className={clx.message}>
        {message}
      </div>
    </div>
  );
};
