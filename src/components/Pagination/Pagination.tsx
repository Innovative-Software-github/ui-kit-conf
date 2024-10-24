import React from 'react';

import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import { generatePagination } from '../../utils/generatePagination';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';
import clx from './Pagination.module.css';

type TPaginationProps = {
  currentPage: number
  handlePageChange: (page: number) => void
  itemsPerPage: number
  totalItems: number
}

export const Pagination: React.FC<TPaginationProps> = (props) => {
  const {
    currentPage,
    handlePageChange,
    itemsPerPage,
    totalItems,
  } = props;
  const { pages, totalPages } = React.useMemo(
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
        <Icon type={IconType.ArrowLeft_20} width={20} />
        <span>Назад</span>
      </button>
      {pages.map((page) => (typeof page === 'string' ? (
        <span className={clx.ellipsis} key={uuidv4()}>
          {page}
        </span>
      ) : (
        typeof page === 'number' && (
          <button
            type="button"
            className={
                page === currentPage
                  ? clsx(clx.paginationButton, clx.activePageButton)
                  : clx.paginationButton
              }
            key={page}
            onClick={() => handlePageChange(page)}
          >
            <span>
              {page}
            </span>
          </button>
        )
      )))}
      <button
        type="button"
        className={clsx(clx.navigationButton, clx.nextButton)}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <span>Дальше</span>
        <Icon type={IconType.ArrowRight_20} width={20} />
      </button>
    </div>
  );
};

Pagination.displayName = 'Pagination';
