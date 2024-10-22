import React, { useMemo } from 'react';

import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';
import clx from './Pagination.module.css';

type Props = {
  currentPage: number
  handlePageChange: (page: number) => void
  itemsPerPage: number
  totalItems: number
}

const generatePagination = (totalItems: number, itemsPerPage: number, currentPage: number) => {
  const totalPages = Math.ceil(totalItems / (itemsPerPage));

  let pages = [];

  if (totalPages <= 7) {
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

export const Pagination = ({
  currentPage,
  handlePageChange,
  itemsPerPage,
  totalItems,
}: Props) => {
  const { pages, totalPages } = useMemo(
    () => generatePagination(totalItems, itemsPerPage, currentPage),
    [currentPage, itemsPerPage, totalItems],
  );

  return (
    <div className={clx.container}>
      <button
        className={clsx(clx.navigationButton, clx.backButton)}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        type="button"
      >
        <Icon type={IconType.ArrowLeft_20} />
        <span>Назад</span>
      </button>
      {pages.map((page) => (typeof page === 'string' ? (
        <span className={clx.ellipsis} key={uuidv4()}>
          {page}
        </span>
      ) : (
        typeof page === 'number' && (
        <button
          className={
                page === currentPage
                  ? clsx(clx.paginationButton, clx.activePageButton)
                  : clx.paginationButton
              }
          key={page}
          onClick={() => handlePageChange(page)}
          type="button"
        >
          <span>
            {page}
          </span>
        </button>
        )
      )))}
      <button
        className={clsx(clx.navigationButton, clx.nextButton)}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        type="button"
      >
        <span>Дальше</span>
        <Icon type={IconType.ArrowRight_20} />
      </button>
    </div>
  );
};

Pagination.displayName = 'Pagination';
