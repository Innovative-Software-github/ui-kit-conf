import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { IconType } from '../Icon/IconsMapping';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const InputVariations: Story = {
  render: (args) => (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '30px',
    }}
    >
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <Button
          {...args}
          variant="filed"
          leftIconType={IconType.ArrowDown_20}
          rightIconType={IconType.Edit_20}
          size="L"
        />
        <Button
          {...args}
          variant="filed"
          leftIconType={IconType.ArrowDown_20}
          size="L"
        />
        <Button
          {...args}
          variant="filed"
          size="L"
        />
        <Button
          {...args}
          variant="filed"
          rightIconType={IconType.Edit_20}
          size="L"
        />
      </div>
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <Button
          {...args}
          variant="filed"
          leftIconType={IconType.Edit_20}
          rightIconType={IconType.Edit_20}
          size="M"
        />
        <Button
          {...args}
          variant="filed"
          leftIconType={IconType.Edit_20}
          size="M"
        />
        <Button
          {...args}
          variant="filed"
          size="M"
        />
        <Button
          {...args}
          variant="filed"
          rightIconType={IconType.Edit_20}
          size="M"
        />
      </div>
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <Button
          {...args}
          variant="filed"
          size="L"
        />
        <Button
          {...args}
          variant="filed"
          size="M"
        />
      </div>
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <Button
          {...args}
          variant="outlined"
          icon={IconType.Edit_20}
          size="L"
        />
        <Button
          {...args}
          variant="outlined"
          icon={IconType.Edit_20}
          size="M"
        />
      </div>
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <Button
          {...args}
          variant="outlined"
          size="L"
        />
        <Button
          {...args}
          variant="outlined"
          size="M"
        />
      </div>
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <Button
          {...args}
          variant="text"
          icon={IconType.Edit_20}
          size="L"
        />
        <Button
          {...args}
          variant="text"
          icon={IconType.Edit_20}
          size="M"
        />
      </div>
    </div>
  ),
  args: {
    isLoading: false,
    isDisabled: false,
    children: 'press',
  },
};
