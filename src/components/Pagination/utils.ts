export const generatePagination = (
  totalItems: number,
  itemsPerPage: number,
  currentPage: number,
  maxVisiblePages = 7,
) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  console.log(totalPages);

  if (totalPages <= 1) {
    return { pages: [1], totalPages };
  }

  const pages: (number | string)[] = [];

  const half = Math.floor(maxVisiblePages / 2);
  let start = currentPage - half;
  let end = currentPage + half;

  if (start <= 1) {
    start = 1;
    end = maxVisiblePages;
  }

  if (end >= totalPages) {
    start = totalPages - maxVisiblePages + 1;
    end = totalPages;
  }

  if (start < 1) {
    start = 1;
  }

  if (end > totalPages) {
    end = totalPages;
  }

  const hasLeftEllipsis = start > 2;
  const hasRightEllipsis = end < totalPages - 1;

  pages.push(1);

  if (hasLeftEllipsis) {
    pages.push('ellipsis');
  }

  for (let i = start; i <= end; i += 1) {
    if (i > 1 && i < totalPages) {
      pages.push(i);
    }
  }

  if (hasRightEllipsis) {
    pages.push('ellipsis');
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return { pages, totalPages };
};
