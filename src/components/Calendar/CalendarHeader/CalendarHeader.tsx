import React from 'react';
import { IconType } from '../../Icon/IconsMapping';
import { Icon } from '../../Icon/Icon';

import cls from './CalendarHeader.module.css';
import { months } from './utils';

export interface ICalendarHeader {
  monthDate: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  toggleShowYears: () => void;
  toggleShowMonths: () => void;
}

export const CalendarHeader:React.FC<ICalendarHeader> = ({
  monthDate,
  decreaseMonth,
  increaseMonth,
  toggleShowYears,
  toggleShowMonths,
}) => (
  <div className={cls.container}>
    <div>
      <button
        className={cls.monthButton}
        type="button"
        onClick={toggleShowMonths}
      >
        {months[monthDate?.getMonth()]}
      </button>
      <button
        className={cls.yearButton}
        type="button"
        onClick={toggleShowYears}
      >
        {monthDate?.getFullYear()}
      </button>
    </div>
    <div className={cls.contolButtons}>
      <button
        className={cls.prevButton}
        type="button"
        onClick={decreaseMonth}
      >
        <Icon type={IconType.ArrowLeft_20} width={16} height={16} />
      </button>
      <button
        className={cls.nextButton}
        type="button"
        onClick={increaseMonth}
      >
        <Icon type={IconType.ArrowRight_20} width={16} height={16} />
      </button>
    </div>
  </div>
);
