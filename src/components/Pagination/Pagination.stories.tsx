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
    currentPage: 1,
    handlePageChange: () => {},
    itemsPerPage: 10,
    totalItems: 100,
  },
  render: ({ totalItems }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChangeInternal = (page: number) => {
      setCurrentPage(page);
    };

    return (
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChangeInternal}
        itemsPerPage={15}
        totalItems={totalItems}
      />
    );
  },
};
