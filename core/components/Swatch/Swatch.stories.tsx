import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
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