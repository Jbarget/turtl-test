import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    label: 'Button',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const AsLink: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noreferrer',
    label: 'Button link',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
  },
};

export const WithLongLabel: Story = {
  args: {
    label: 'This is a longer button label to test wrapping and spacing',
  },
};

export const InContext: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button {...args} variant="primary" label="Primary" />
        <Button {...args} variant="secondary" label="Secondary" />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button {...args} href="https://example.com" target="_blank" rel="noreferrer" label="As link" />
        <Button {...args} disabled label="Disabled" />
      </div>
    </div>
  ),
};

