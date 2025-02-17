import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {CreativityNiches} from './CreativityNiches';

const meta: Meta<typeof CreativityNiches> = {
  component: CreativityNiches,
};

export default meta;

type Story = StoryObj<typeof CreativityNiches>;

export const Basic: Story = {args: {}};
