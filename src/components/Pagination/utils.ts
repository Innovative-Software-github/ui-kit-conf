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

  // Если есть крайние страницы, то добавим еще 1 sibling элемент, чтобы избежать изменения размеров
  const extraElement = boundaryCount > 0 ? 1 : 0;

  // Вычисляем начальный индекс блока страниц вокруг текущей (siblings)
  const siblingsStart = Math.max(
    Math.min(
      // Старт от текущей страницы минус siblingCount (чтобы показать siblingCount страниц слева)
      page - siblingCount,
      // Но не дальше чем count - siblingCount*2 - boundaryCount - freeElement (чтобы справа осталось место)
      count - siblingCount * 2 - boundaryCount - extraElement,
    ),
    // И не меньше чем boundaryCount + 1 (чтобы не пересекаться с начальными страницами)
    boundaryCount + 1,
  );

  // Вычисляем конечный индекс блока страниц вокруг текущей (siblings)
  const siblingsEnd = Math.min(
    Math.max(
      // Конец от текущей страницы плюс siblingCount (чтобы показать siblingCount страниц справа)
      page + siblingCount,
      // Но не меньше чем siblingCount*2 + 1 + boundaryCount + freeElement (чтобы слева осталось место) и при этом не уменбшать кол-вао элементов
      siblingCount * 2 + 1 + boundaryCount + extraElement,
    ),
    // И не больше чем count - boundaryCount (чтобы не пересекаться с конечными страницами)
    count - boundaryCount,
  );

  function getStartEllipsisContent(siblingsStart: number, boundaryCount: number) {
    if (siblingsStart > boundaryCount + 1 && boundaryCount !== 0) {
      return ['start-ellipsis'];
    }

    return [];
  }

  function getEndEllipsisContent(siblingsEnd: number, boundaryCount: number, count: number) {
    if (siblingsEnd < count - boundaryCount && boundaryCount !== 0) {
      return ['end-ellipsis'];
    }

    return [];
  }

  const itemList = [
    'previous',
    ...startPages,
    ...getStartEllipsisContent(siblingsStart, boundaryCount),
    ...range(siblingsStart, siblingsEnd),
    ...getEndEllipsisContent(siblingsEnd, boundaryCount, count),
    ...endPages,
    'next',
  ];

  return itemList;
};
