import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {WorkCard} from './WorkCard';

const meta: Meta<typeof WorkCard> = {
  component: WorkCard,
};

export default meta;

type Story = StoryObj<typeof WorkCard>;

export const Basic: Story = {args: {}};
