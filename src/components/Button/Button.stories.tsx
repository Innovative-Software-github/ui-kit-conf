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
          variant="default"
          leftIconType={IconType.ArrowDown_20}
          rightIconType={IconType.Edit_20}
          size="L"
        />
        <Button
          {...args}
          variant="default"
          leftIconType={IconType.Edit_20}
          size="L"
        />
        <Button
          {...args}
          variant="default"
          size="L"
        />
        <Button
          {...args}
          variant="default"
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
          variant="default"
          leftIconType={IconType.Edit_20}
          rightIconType={IconType.Edit_20}
          size="M"
        />
        <Button
          {...args}
          variant="default"
          leftIconType={IconType.Edit_20}
          size="M"
        />
        <Button
          {...args}
          variant="default"
          size="M"
        />
        <Button
          {...args}
          variant="default"
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
          variant="default"
          size="L"
        />
        <Button
          {...args}
          variant="default"
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
          leftIconType={IconType.Edit_20}
          size="L"
        />
        <Button
          {...args}
          variant="outlined"
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
          leftIconType={IconType.Edit_20}
          size="L"
        />
        <Button
          {...args}
          variant="text"
          rightIconType={IconType.Edit_20}
          size="M"
        />
      </div>
    </div>
  ),
  args: {
    isLoading: false,
    isDisabled: false,
    children: 'Зарегистрироваться',
  },
};
