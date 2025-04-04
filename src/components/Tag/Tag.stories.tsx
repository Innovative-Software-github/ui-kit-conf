import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const StaticTagStory: Story = {
  args: {
    type: 'selected',
    children: 'Tag-text',
  },
};
