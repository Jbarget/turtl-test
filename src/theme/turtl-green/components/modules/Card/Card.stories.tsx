import type { Meta, StoryObj } from '@storybook/react';

import { Component as Card } from './index.tsx';

const meta: Meta<typeof Card> = {
  title: 'Modules/Card',
  component: Card,
  args: {
    fieldValues: {
      title: 'Card title',
      description: 'A short description that explains the value of this card module.',
      link: {
        url: { type: 'EXTERNAL', content_id: 0, href: 'https://example.com' },
        open_in_new_tab: false,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const LongContent: Story = {
  args: {
    fieldValues: {
      title: 'A longer card title that wraps onto multiple lines',
      description:
        'This description is intentionally long to exercise layout, spacing, and typography across multiple lines. It should still look balanced and readable in the card container.',
      link: {
        url: { type: 'EXTERNAL', content_id: 0, href: 'https://example.com' },
        open_in_new_tab: true,
      },
    },
  },
};

export const WithoutLink: Story = {
  args: {
    fieldValues: {
      title: 'Card without a link',
      description: 'The CTA should fall back to a safe default when no link is provided.',
      link: {},
    },
  },
};

