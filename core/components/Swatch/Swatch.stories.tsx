import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Swatch, SwatchProps } from './Swatch';

export default {
  title: 'Components/Swatch',
  component: Swatch,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<SwatchProps> = (args) => <Swatch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: '#cfa',
};