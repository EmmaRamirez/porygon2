import React from 'react';
import { HTMLImageProps } from 'types/Props';
// import { Props } from 'types/Props';
import { useStyles } from 'utils';

export type SpriteProps = {sprite?: string} & HTMLImageProps;

const spriteStyles = {
    base: {
        imageRendering: 'pixelated' as 'pixelated',
    }
}

export function Sprite(props: SpriteProps) {
    const classes = useStyles(spriteStyles);

    return <img className={classes.base} src={props.sprite} {...props} />
}