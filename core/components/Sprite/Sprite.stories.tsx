import React from 'react';
import porygon from 'assets/porygon.png';
import { Story, Meta } from '@storybook/react';

import { Sprite, SpriteProps } from '.';

export default {
  title: 'Components/Sprite',
  component: Sprite,
} as Meta;

const Template: Story<SpriteProps> = (args) => <Sprite {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    sprite: porygon,
};

export const Large = Template.bind({});
Large.args = {
    sprite: porygon,
    style: {
        height: '8rem',
        width: '8rem',
    }
}