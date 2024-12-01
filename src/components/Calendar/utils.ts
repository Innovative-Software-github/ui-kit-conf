import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';

export const formatDateRange = (start: Date | null, end: Date | null): string => {
  if (start && end) {
    return `${format(start, 'd MMMM', { locale: ru })} - ${format(end, 'd MMMM', { locale: ru })}`;
  }
  if (start) {
    return format(start, 'd MMMM', { locale: ru });
  }

  return '';
};
