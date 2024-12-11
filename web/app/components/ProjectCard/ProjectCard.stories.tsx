// import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ProjectCard} from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  component: ProjectCard,
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Basic: Story = {args: {}};
