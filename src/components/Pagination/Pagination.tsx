import React from 'react';

import clsx from 'clsx';

import { generatePagination } from './utils';
import { Icon } from '../Icon/Icon';
import { IconType } from '../Icon/IconsMapping';
import clx from './Pagination.module.css';

export interface IPaginationProps {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  handlePageChange: (page: number | string) => void
}

export const Pagination: React.FC<IPaginationProps> = (props) => {
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
      {pages.map((page) => {
        if (page === 'ellipsis') {
          return (
            <>...</>
          );
        }

        return (
          <button
            className={clsx(clx.paginationButton, {
              [clx.activePageButton]: page === currentPage,
            })}
            type="button"
            key={page}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        );
      })}
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

// {pages.map((page) => (typeof page === 'string' ? (
//   <span className={clx.ellipsis} key={page}>
//     {page}
//   </span>
// ) : (
//   typeof page === 'number' && (
//     <button
//       type="button"
//       className={
//           page === currentPage
//             ? clsx(clx.paginationButton, clx.activePageButton)
//             : clx.paginationButton
//         }
//       key={page}
//       onClick={() => handlePageChange(page)}
//     >
//       <span>
//         {page}
//       </span>
//     </button>
//   )
// )))}
