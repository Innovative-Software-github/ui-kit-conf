import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { IconType } from '../Icon/IconsMapping';
import { Button, IButtonProps } from './Button';

const iconOptions = Object.values(IconType);

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    buttonType: {
      type: 'string',
      className: 'filed',
      options: ['filed', 'outlined', 'text'],
      control: {
        type: 'select',
      },
    },
    icon: {
      defaultValue: '',
      options: ['', ...iconOptions],
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: StoryFn<IButtonProps> = (args: React.JSX.IntrinsicAttributes & IButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'press',
  buttonType: 'filed',
  icon: '',
};
