import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import list from '../utils/list';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectFirst: Story = {
  args: {
    options: list,
    onSelectChange: (newSelection) => console.log(newSelection),
    label: 'Choose one',
    placeholder: 'Введите',
  },
};
