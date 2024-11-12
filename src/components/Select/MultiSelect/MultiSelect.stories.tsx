import type { Meta, StoryObj } from '@storybook/react';

import list from '../utils/list';
import { MultiSelect } from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  title: 'MultiSelect',
  component: MultiSelect,
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const SelectFirst: Story = {
  args: {
    options: list,
    onSelectChange: (newSelection) => console.log(newSelection),
    label: 'Choose multiple',
    placeholder: 'Введите',
  },
};
