import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FieldWrapper } from './FieldWrapper';
import { Input } from '../Input/Input';
import { IconType } from '../Icon/IconsMapping';

const meta: Meta<typeof FieldWrapper> = {
  component: FieldWrapper,
};

export default meta;
type Story = StoryObj<typeof FieldWrapper>;

export const InputVariations: Story = {
  render: (args) => (
    <div style={{
      display: 'flex', gap: '30px',
    }}
    >
      <div style={{
        width: '600px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
      >
        IDLE:
        <FieldWrapper label="Title" text="Supporting text" {...args}>
          <Input value="Text" onChange={(event) => console.log(event.target.value)} />
        </FieldWrapper>

        <FieldWrapper
          {...args}
          label="Title"
          text="Supporting text"
          icon={IconType.ArrowTop_20}
        >
          <Input value="Text" onChange={(event) => console.log(event.target.value)} />
        </FieldWrapper>

        ERROR:
        <FieldWrapper {...args} type="error" label="Title" text="Supporting text">
          <Input isError value="Text" onChange={(event) => console.log(event.target.value)} />
        </FieldWrapper>

        <FieldWrapper
          {...args}
          type="error"
          label="Title"
          text="Supporting text"
          icon={IconType.ArrowTop_20}
        >
          <Input isError value="Text" onChange={(event) => console.log(event.target.value)} />
        </FieldWrapper>
      </div>
      <div style={{
        width: '600px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
      >
        DISABLED:
        <FieldWrapper {...args} type="disabled" label="Title" text="Supporting text">
          <Input isDisabled value="Text" onChange={(event) => console.log(event.target.value)} />
        </FieldWrapper>

        <FieldWrapper
          {...args}
          type="disabled"
          label="Title"
          text="Supporting text"
          icon={IconType.ArrowTop_20}
        >
          <Input isDisabled value="Text" onChange={(event) => console.log(event.target.value)} />
        </FieldWrapper>

        LOADING:
        <FieldWrapper {...args} type="loading" label="Title" text="Supporting text">
          <Input isLoading value="Text" onChange={(event) => console.log(event.target.value)} />
        </FieldWrapper>

        <FieldWrapper
          {...args}
          type="loading"
          label="Title"
          text="Supporting tsxt"
          icon={IconType.ArrowTop_20}
        >
          <Input isLoading value="Text" onChange={(event) => console.log(event.target.value)} />
        </FieldWrapper>
      </div>
    </div>
  ),
  args: {
    type: 'info',
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    type: {
      options: ['info', 'loading', 'error', 'disabled'],
      control: {
        type: 'select',
      },
    },
  },
};

export const StaticComboGroupStory = () => {
  const [options, s] = React.useState('data');

  return (
    <FieldWrapper type="info" label="Title" text={options} isAnimateText>
      <Input value={options} onChange={(event) => s(event.target.value)} />
    </FieldWrapper>
  );
};
