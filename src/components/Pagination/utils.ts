import { IPaginationProps } from './Pagination';

export type IUsePaginationProps = Omit<IPaginationProps, 'onChange'>
export type TUsePaginationReturn = (number | string)[];

export const usePagination = ({
  count,
  page,
  siblingCount,
  boundaryCount,
}: IUsePaginationProps): TUsePaginationReturn => {
  const range = (start, end) => {
    const length = end - start + 1;

    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

  const siblingsStart = Math.max(
    Math.min(
      page - siblingCount,
      count - siblingCount * 2 - boundaryCount,
    ),
    boundaryCount + 1,
  );

  const siblingsEnd = Math.min(
    Math.max(
      page + siblingCount,
      siblingCount * 2 + 1 + boundaryCount,
    ),
    count - boundaryCount,
  );

  // Перегрузки для getStartEllipsisContent
  function getStartEllipsisContent(siblingsStart: number, boundaryCount: number, count: number):
  ('start-ellipsis' | number)[];

  function getStartEllipsisContent(siblingsStart: number): ('start-ellipsis' | number)[];

  function getStartEllipsisContent(siblingsStart: number, boundaryCount?: number, count?: number):
  ('start-ellipsis' | number)[] {
    if (boundaryCount !== undefined && count !== undefined) {
      // Исправлено условие с boundaryCount +1
      if (siblingsStart > boundaryCount + 1 && boundaryCount !== 0) {
        return ['start-ellipsis'];
      }
    }

    return [];
  }

  // Перегрузки для getEndEllipsisContent
  function getEndEllipsisContent(siblingsEnd: number, boundaryCount: number, count: number):
  ('end-ellipsis' | number)[];
  function getEndEllipsisContent(siblingsEnd: number): ('end-ellipsis' | number)[];

  function getEndEllipsisContent(siblingsEnd: number, boundaryCount?: number, count?: number):
  ('end-ellipsis' | number)[] {
    if (boundaryCount !== undefined && count !== undefined) {
      if (siblingsEnd < count - boundaryCount && boundaryCount !== 0) {
        return ['end-ellipsis'];
      }
    }

    return [];
  }

  const itemList = [
    'previous',
    ...(boundaryCount > 0 ? startPages : []),
    ...(boundaryCount > 0 ? getStartEllipsisContent(siblingsStart, boundaryCount, count) : []),
    ...range(siblingsStart, siblingsEnd),
    ...(boundaryCount > 0 ? getEndEllipsisContent(siblingsEnd, boundaryCount, count) : []),
    ...(boundaryCount > 0 ? endPages : []),
    'next',
  ];

  return itemList;
};
