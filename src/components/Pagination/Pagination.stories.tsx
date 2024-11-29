import type { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import { Pagination } from './Pagination';

const meta = {
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>

export const PaginationDefault: Story = {
  args: {
    page: 1,
    count: 100,
    siblingCount: 1,
    boundaryCount: 2,
    onChange: () => null,
  },
  render: ({
    page, count, siblingCount, boundaryCount,
  }) => {
    const [currentPage, setCurrentPage] = useState(page);

    const handlePageChangeInternal = (page: number) => {
      console.log(page);
      setCurrentPage(page);
    };

    return (
      <Pagination
        page={currentPage}
        count={count}
        siblingCount={siblingCount}
        boundaryCount={boundaryCount}
        onChange={handlePageChangeInternal}
      />
    );
  },
};
