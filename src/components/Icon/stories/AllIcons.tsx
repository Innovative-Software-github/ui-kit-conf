import * as React from 'react';

import { Icon } from '../Icon';
import { IconType } from '../IconsMapping';

import cls from './AllIcons.module.css';
import { copyToClipboard } from '../../../utils/copyToClipboard';

export const AllIcons = () => (
  <>
    <strong>Нажми на блок чтобы скопировать css переменную</strong>
    <div className={cls.wrapper}>
      {Object.values(IconType).map((iconType) => (
        <div key={iconType}>
          <button type="button" className={cls.iconButton} onClick={() => copyToClipboard(iconType)}>
            <Icon type={IconType[iconType]} />
          </button>
          <div>{iconType}</div>
        </div>
      ))}
    </div>
  </>
);
