import { IPaginationProps } from './Pagination';

export type IUsePaginationProps = Omit<IPaginationProps, 'onChange'>
export type TUsePaginationReturn = (number | string)[];

export const usePagination = ({
  count,
  page,
  siblingCount,
  boundaryCount,
  isMobile,
}: IUsePaginationProps & { isMobile: boolean }): TUsePaginationReturn => {
  const range = (start, end) => {
    const length = end - start + 1;

    return Array.from({ length }, (_, i) => start + i);
  };

  if (isMobile) {
    const mobileItems: (number | string)[] = [];
    const showStart = page <= 2;
    const showEnd = page >= count - 1;

    mobileItems.push('previous');

    if (showStart) {
      mobileItems.push(...range(1, Math.min(3, count)));
    } else if (showEnd) {
      mobileItems.push(...range(Math.max(1, count - 2), count));
    } else {
      mobileItems.push(...range(page - 1, page + 1));
    }
    mobileItems.push('next');

    return mobileItems;
  }

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

  const siblingsStart = Math.max(
    Math.min(
      page - siblingCount,
      count - boundaryCount - siblingCount * 2 - 1,
    ),
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(
      page + siblingCount,
      boundaryCount + siblingCount * 2 + 2,
    ),
    count - boundaryCount - 1,
  );

  const itemList = [
    'previous',
    ...startPages,

    ...(
      (() => {
        if (siblingsStart > boundaryCount + 2) return ['start-ellipsis'];
        if (boundaryCount + 1 < count - boundaryCount) return [boundaryCount + 1];

        return [];
      })()
    ),

    ...range(siblingsStart, siblingsEnd),

    ...(
      (() => {
        if (siblingsEnd < count - boundaryCount - 1) return ['end-ellipsis'];
        if (count - boundaryCount > boundaryCount) return [count - boundaryCount];

        return [];
      })()
    ),

    ...endPages,
    'next',
  ];

  // comment
  return itemList;
};
