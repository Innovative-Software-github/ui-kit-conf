import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';
import { spinnerSize } from './utils';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const SpinnerStory: Story = {
  argTypes: {
    size: {
      type: 'string',
      className: 'filed',
      options: [...Object.values(spinnerSize)],
      control: {
        type: 'select',
      },
    },
  },
};
