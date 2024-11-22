import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const InputVariations: Story = {
  render: (args) => (
    <div>
      <Tag
        {...args}
      />
    </div>
  ),
  args: {
    children: 'Tag-text',
  },
};
