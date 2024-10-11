/* eslint-disable sort-keys */
import React, { children } from 'react';
import { Button } from './Button';

const download = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_453_12850" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_453_12850)">
      <mask id="mask1_453_12850" maskUnits="userSpaceOnUse" x="-1" y="-1" width="21" height="21">
        <rect x="-0.15625" y="-0.234863" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask1_453_12850)">
        <path d="M9.84375 16.7651C8.88708 16.7651 7.98292 16.5814 7.13125 16.2139C6.27958 15.8464 5.53583 15.3447 4.9 14.7089C4.26417 14.0731 3.7625 13.3293 3.395 12.4776C3.0275 11.626 2.84375 10.7218 2.84375 9.76514C2.84375 8.7968 3.0275 7.88972 3.395 7.04389C3.7625 6.19805 4.26417 5.45722 4.9 4.82139C5.53583 4.18555 6.27958 3.68389 7.13125 3.31639C7.98292 2.94889 8.88708 2.76514 9.84375 2.76514C10.0421 2.76514 10.2083 2.83222 10.3425 2.96639C10.4767 3.10055 10.5437 3.2668 10.5437 3.46514C10.5437 3.66347 10.4767 3.82972 10.3425 3.96389C10.2083 4.09805 10.0421 4.16514 9.84375 4.16514C8.29208 4.16514 6.97083 4.71055 5.88 5.80139C4.78917 6.89222 4.24375 8.21347 4.24375 9.76514C4.24375 11.3168 4.78917 12.6381 5.88 13.7289C6.97083 14.8197 8.29208 15.3651 9.84375 15.3651C11.3954 15.3651 12.7167 14.8197 13.8075 13.7289C14.8983 12.6381 15.4438 11.3168 15.4438 9.76514C15.4438 9.5668 15.5108 9.40055 15.645 9.26639C15.7792 9.13222 15.9454 9.06514 16.1438 9.06514C16.3421 9.06514 16.5083 9.13222 16.6425 9.26639C16.7767 9.40055 16.8438 9.5668 16.8438 9.76514C16.8438 10.7218 16.66 11.626 16.2925 12.4776C15.925 13.3293 15.4233 14.0731 14.7875 14.7089C14.1517 15.3447 13.4108 15.8464 12.565 16.2139C11.7192 16.5814 10.8121 16.7651 9.84375 16.7651Z" fill="#454545" />
      </g>
    </g>
  </svg>

);

const pencil = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_181_6809" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_181_6809)">
      <mask id="mask1_181_6809" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask1_181_6809)">
        <path d="M4.16667 15.8333H5.35417L13.5 7.6875L12.3125 6.5L4.16667 14.6458V15.8333ZM2.5 17.5V13.9583L13.5 2.97917C13.6667 2.82639 13.8507 2.70833 14.0521 2.625C14.2535 2.54167 14.4653 2.5 14.6875 2.5C14.9097 2.5 15.125 2.54167 15.3333 2.625C15.5417 2.70833 15.7222 2.83333 15.875 3L17.0208 4.16667C17.1875 4.31944 17.309 4.5 17.3854 4.70833C17.4618 4.91667 17.5 5.125 17.5 5.33333C17.5 5.55556 17.4618 5.76736 17.3854 5.96875C17.309 6.17014 17.1875 6.35417 17.0208 6.52083L6.04167 17.5H2.5ZM12.8958 7.10417L12.3125 6.5L13.5 7.6875L12.8958 7.10417Z" fill="#454545" />
      </g>
    </g>
  </svg>

);

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    type: {
      type: 'string',
      defaultValue: 'filed',
      options: ['filed', 'outlined', 'text'],
      control: {
        type: 'radio',
      },
    },
    state: {
      type: 'string',
      defaultValue: 'enabled',
      options: ['enabled', 'hover', 'active', 'disabled'],
      control: {
        type: 'radio',
      },
    },
    icon: {
      defaultValue: '',
      options: ['', pencil, download], // тут почему-то работает только последний указанный элемент(pencil сейчас не работает, download работает)
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (arg) => <Button {...arg} />;

export const Default = Template.bind({});
Default.args = {
  children: 'press',
  type: 'filed',
  state: 'enabled',
  icon: '',
};
