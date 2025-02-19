import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from './LinkButton';
import { IconType } from '../Icon/IconsMapping';

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

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
        <LinkButton
          {...args}
          variant="default"
          leftIconType={IconType.ArrowDown_20}
          rightIconType={IconType.Edit_20}
          size="L"
        />
        <LinkButton
          {...args}
          variant="default"
          leftIconType={IconType.Edit_20}
          size="L"
        />
        <LinkButton
          {...args}
          variant="default"
          size="L"
        />
        <LinkButton
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
        <LinkButton
          {...args}
          variant="default"
          leftIconType={IconType.Edit_20}
          rightIconType={IconType.Edit_20}
          size="M"
        />
        <LinkButton
          {...args}
          variant="default"
          leftIconType={IconType.Edit_20}
          size="M"
        />
        <LinkButton
          {...args}
          variant="default"
          size="M"
        />
        <LinkButton
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
        <LinkButton
          {...args}
          variant="default"
          size="L"
        />
        <LinkButton
          {...args}
          variant="default"
          size="M"
        />
      </div>
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <LinkButton
          {...args}
          variant="outlined"
          leftIconType={IconType.Edit_20}
          size="L"
        />
        <LinkButton
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
        <LinkButton
          {...args}
          variant="outlined"
          size="L"
        />
        <LinkButton
          {...args}
          variant="outlined"
          size="M"
        />
      </div>
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <LinkButton
          {...args}
          variant="text"
          leftIconType={IconType.Edit_20}
          size="L"
        />
        <LinkButton
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
