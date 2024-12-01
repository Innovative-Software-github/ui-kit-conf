import React from 'react';
import type { Meta } from '@storybook/react';

import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
};

export default meta;

export const CalendarStory = () => {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '40px',
        padding: '40px',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Calendar
        startDate={startDate}
        endDate={endDate}
        onChangeStartDate={(d) => setStartDate(d)}
        onChangeEndDate={(d) => setEndDate(d)}
      />
    </div>
  );
};
