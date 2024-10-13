import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Icon, IIconProps } from '../Icon';
import { IconType } from '../IconsMapping';
import { AllIcons } from './AllIcons';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    type: {
      values: '',
    },
    width: {
      control: {
        type: 'number',
        min: 16,
        max: 128,
        step: 1,
      },
    },
    height: {
      control: {
        type: 'number',
        min: 16,
        max: 128,
        step: 1,
      },
    },
    isScalable: {
      control: 'boolean',
    },
  },
} as Meta<IIconProps>;

const Template: StoryFn<IIconProps> = (args:any) => <Icon {...args} />;

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  type: Object.values(IconType)[0],
  width: 24,
  height: 24,
  isScalable: false,
};

export const AllIcon = () => <AllIcons />;
