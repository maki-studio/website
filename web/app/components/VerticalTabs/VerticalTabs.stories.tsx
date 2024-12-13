import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {VerticalTabs} from './VerticalTabs';

const meta: Meta<typeof VerticalTabs> = {
  component: VerticalTabs,
};

export default meta;

type Story = StoryObj<typeof VerticalTabs>;

export const Basic: Story = {args: {}};
