import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import { Intent } from 'types';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Button',
  ghost: true,
};


export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
};

export const IntentDanger = Template.bind({});
IntentDanger.args = {
  children: 'Button',
  intent: Intent.Danger,
}