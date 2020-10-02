import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <strong>Button</strong>,
    defaultValue: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: <strong>Button</strong>,
  ghost: true,
};
