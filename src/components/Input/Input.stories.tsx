import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { Icon, IconType } from '../..';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

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
        <Input
          {...args}
          size="L"
          elPrefix={<Icon type={IconType.Done_20} width={20} height={20} />}
          elSuffix={<Icon type={IconType.ArrowDown_20} width={20} height={20} />}
          placeholder="Placeholder"
        />
        <Input
          {...args}
          size="M"
          elPrefix={<Icon type={IconType.Done_20} width={20} height={20} />}
          elSuffix={<Icon type={IconType.ArrowDown_20} width={20} height={20} />}
          placeholder="Placeholder"
        />
      </div>
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <Input
          {...args}
          size="L"
          elPrefix={<Icon type={IconType.Done_20} width={20} height={20} />}
          placeholder="Placeholder"
        />
        <Input
          {...args}
          size="M"
          elPrefix={<Icon type={IconType.Done_20} width={20} height={20} />}
          placeholder="Placeholder"
        />
      </div>
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <Input
          {...args}
          size="L"
          elSuffix={<Icon type={IconType.ArrowDown_20} width={20} height={20} />}
          placeholder="Placeholder"
        />
        <Input
          size="M"
          {...args}
          elSuffix={<Icon type={IconType.ArrowDown_20} width={20} height={20} />}
          placeholder="Placeholder"
        />
      </div>
      <div style={{
        display: 'flex', alignItems: 'end', gap: '20px', maxWidth: '700px',
      }}
      >
        <Input
          {...args}
          size="L"
          placeholder="Placeholder"
        />
        <Input
          size="M"
          {...args}
          placeholder="Placeholder"
        />
      </div>
    </div>
  ),
  args: {
    isError: false,
    isLoading: false,
    isDisabled: false,
    type: 'text',
    onPressEnter: (e) => console.log(e.currentTarget.value),
    onChange: (event) => console.log(event.target.value),
  },
  argTypes: {
    elPrefix: { control: false },
    elSuffix: { control: false },
  },
};
