import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AvatarUploader } from './AvatarUploader';

const meta: Meta<typeof AvatarUploader> = {
  component: AvatarUploader,
};

export default meta;
type Story = StoryObj<typeof AvatarUploader>;

export const InputVariations: Story = {
  render: (args) => (
    <AvatarUploader />
  ),
};
