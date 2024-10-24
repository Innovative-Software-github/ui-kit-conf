const MAX_VISIBLE_PAGES = 7;

export const generatePagination = (totalItems: number, itemsPerPage: number, currentPage: number) => {
  const totalPages = Math.ceil(totalItems / (itemsPerPage));

  let pages = [];

  if (totalPages <= MAX_VISIBLE_PAGES) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    for (let i = 1; i <= currentPage; i++) {
      pages.push(i);
    }
    if (currentPage > 3 && currentPage < totalPages - 3) {
      pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    } else if (currentPage <= 3) {
      pages = [1, 2, 3, 4, 5, '...', totalPages];
    } else {
      pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
  }

  return { pages, totalPages };
};
