import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Colors, ColorProps } from './Colors';

export default {
  title: 'Core/Colors',
  component: Colors,
} as Meta;

const Template: Story<ColorProps> = (args) => <Colors {...args} />;

export const Base = Template.bind({});
Base.args = {
  darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  darkMode: true,
};