import React from 'react';
// import { Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import cls from './Card.module.css';

const MAX_LINES = 3;

export interface ICardProps {
  photos: string[] | null;
  description?: string;
  title: string;
  tags: string[];
  city: string;
  date: string;
}

export const Card: React.FC<ICardProps> = ({
  photos,
  description,
  title,
  tags: initialTags,
  city,
  date,
}) => {
  const tagsGroupRef = React.useRef<HTMLDivElement>(null);
  const [tags, setTags] = React.useState(initialTags);

  const df = (lineHeight, gapSize, height) => lineHeight * MAX_LINES + gapSize * (MAX_LINES - 1) < height;

  React.useEffect(() => {
    if (tagsGroupRef.current && tags.length > 0) {
      const firstTag = tagsGroupRef.current.firstChild as HTMLElement;
      let counter = 0;

      if (firstTag) {
        const lineHeight = firstTag.clientHeight;
        const gapSize = parseInt(getComputedStyle(tagsGroupRef.current).gap, 10);

        [...tagsGroupRef.current.children].forEach(() => {
          const { height } = tagsGroupRef.current.getBoundingClientRect();

          if (df(lineHeight, gapSize, height)) {
            counter += 1;

            const { children } = tagsGroupRef.current;
            const childCount = children.length;

            if (childCount >= 2) {
              const secondLastChild = children[childCount - 2];

              tagsGroupRef.current.removeChild(secondLastChild);
            }
          }
        });
      }

      setTags((prev) => [...prev, `еще ${counter}`]);

      if (firstTag) {
        const lineHeight = firstTag.clientHeight;
        const gapSize = parseInt(getComputedStyle(tagsGroupRef.current).gap, 10);

        [...tagsGroupRef.current.children].forEach(() => {
          const { height } = tagsGroupRef.current.getBoundingClientRect();

          if (df(lineHeight, gapSize, height)) {
            counter += 1;

            const { children } = tagsGroupRef.current;
            const childCount = children.length;

            if (childCount >= 2) {
              const secondLastChild = children[childCount - 2];

              tagsGroupRef.current.removeChild(secondLastChild);
            }
          }
        });
      }
    }
  }, []);

  return (
    <div className={cls.container}>
      <div className={cls.photos}>
        <img src="https://photocasa.ru/uploads/posts/2017-01/1485218882_img_5932.jpg" alt="card" />
      </div>

      <div className={cls.title}>{title}</div>

      <div className={cls.tagsGroup} ref={tagsGroupRef}>
        {!!tags.length && tags.map((tag) => (
          <div key={tag} className={cls.tag}>{tag}</div>
        ))}
      </div>
    </div>
  );
};

{ /* <Swiper
pagination={{
  clickable: true,
  dynamicBullets: true,
}}
modules={[Pagination]}
>
{photos.map((photo, index) => (
  <SwiperSlide key={photo}>
    <img src={photo} alt={`Фото ${index + 1}`} />
  </SwiperSlide>
))}
</Swiper> */ }
