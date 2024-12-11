import React from 'react';
import type { Meta } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

export const CalendarStory = () => {
  const photos = ['https://lh3.googleusercontent.com/proxy/QNX4lU0HXJFcFPAxvB6Vk0Ovar7k_C-tAfCPjDzzDmnqQrJ4j-ITSFy3-LYQE34HayIJhmKrOmN36IiO3mHleYDr6s2pkNew', 'https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg'];
  const tags = ['Aвi', 'Инфрас231322232труктура', 'Аналитика', 'Менеджмент', 'Ai', 'Инфраструкт2ура',  'Аналитика', 'Менеджмент', 'Ai', 'Инфраструктура', 'Аналитика', 'Менеджмент'];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '40px',
        padding: '40px',
        background: 'white',
      }}
    >
      <Card photos={photos} title="Хакатон IT INNO HACK" tags={tags} city="Москва" date="28-04-2005" />
    </div>
  );
};
