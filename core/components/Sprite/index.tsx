import React from 'react';
import { Props } from 'types/Props';
import { useStyles } from 'utils';

export type SpriteProps = Props<
    {
        sprite: string;
    },
    HTMLImageElement
>;

const spriteStyles = {
    base: {
        imageRendering: 'pixelated' as 'pixelated',
    }
}

export function Sprite(props: SpriteProps) {
    const classes = useStyles(spriteStyles);

    return <img className={classes.base} src={props.sprite} {...props} />
}