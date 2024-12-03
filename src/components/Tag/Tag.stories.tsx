import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';


const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const StaticTagStory: Story = {
  args: {
    label: 'Static tag',
  },
};

export const RemovableTagStory: Story = {
  args: {
    selectable: false,
    active: true,
    removable: true,
    onRemove: () => console.log('remove this tag from list of tags e.g.'),
    label: 'Removable tag',
  },
};

export const SelectableTagStory: Story = {
  args: {
    selectable: false,
    onActiveChange: (active) => console.log(active),
    label: 'Selectable tag',
  },
};
