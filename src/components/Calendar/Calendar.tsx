import React, { useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale';
import { CalendarHeader } from './CalendarHeader/CalendarHeader';
import cls from './Calendar.module.css';
import { Input } from '../Input/Input';
import { formatDateRange } from './utils';

type TOnChange = (
  date: (Date | null)[],
  event: React.SyntheticEvent<any, Event> | undefined
) => void;

export interface ICalendar {
  startDate: Date | null;
  endDate: Date | null;
  onChangeStartDate: (date: Date | null) => void;
  onChangeEndDate: (date: Date | null) => void;
}

export const Calendar: React.FC<ICalendar> = ({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
}) => {
  registerLocale('ru', ru);

  const [isOpen, setIsOpen] = useState(false);

  const onChange: TOnChange = (date) => {
    const [start, end] = date;

    onChangeStartDate(start);
    onChangeEndDate(end);
  };

  const handleInputClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace') {
      onChangeStartDate(null);
      onChangeEndDate(null);
    }
  };

  return (
    <div className={cls.wrapper}>
      <Input
        className={cls.input}
        value={formatDateRange(startDate, endDate)}
        readOnly
        placeholder="Выберите дату"
        onMouseDown={handleInputClick}
        onKeyDown={handleKeyDown}
      />
      {isOpen && (
        <ReactDatePicker
          renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
            <CalendarHeader
              monthDate={monthDate}
              decreaseMonth={decreaseMonth}
              increaseMonth={increaseMonth}
              toggleShowYears={null}
              toggleShowMonths={null}
            />
          )}
          className={cls.datepicker}
          weekDayClassName={() => cls.weekDay}
          calendarClassName={cls.calendar}
          dayClassName={() => cls.day}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          showPopperArrow={false}
          locale="ru"
          selectsRange
          inline
          onChange={onChange}
          onClickOutside={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
