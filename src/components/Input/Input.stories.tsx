import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { Icon, IconType } from '../..';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputOriginal: Story = {
  args: {
    isError: false,
    isLoading: false,
    isDisabled: false,
    type: 'text',
    placeholder: 'Placeholder',
    elPrefix: <Icon type={IconType.Plus_20} width={20} height={20} />,
    elSuffix: <Icon type={IconType.Plus_20} width={20} height={20} />,
    onPressEnter: (e) => console.log(e.currentTarget.value),
    onChange: (event) => console.log(event.target.value),
  },
};
