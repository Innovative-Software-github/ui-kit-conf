import type { Meta, StoryObj } from '@storybook/react';

import { CheckmarkValid, Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputOriginal: Story = {
  args: {
    isError: false,
    isLoading: false,
    isDisable: false,
    type: 'text',
    value: '',
    placeholder: 'Placeholder',
    elPrefix: CheckmarkValid,
    elSuffix: CheckmarkValid,
  },
};
