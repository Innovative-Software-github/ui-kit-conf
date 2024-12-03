import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';


const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const StaticTagStory: Story = {
  args: {
    type: 'static',
    label: 'Static tag',
  },
};

export const RemovableTagStory: Story = {
  args: {
    type: 'removable',
    selectable: false,
    active: true,
    removable: true,
    onRemove: () => console.log('remove this tag from list of tags e.g.'),
    label: 'Removable tag',
  },
};

export const SelectableTagStory: Story = {
  args: {
    type: 'selectable',
    selectable: true,
    onActiveChange: (active) => console.log(active),
    label: 'Selectable tag',
  },
};
