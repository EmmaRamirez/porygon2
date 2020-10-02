import { color } from 'csx';
import React, { ButtonHTMLAttributes } from 'react';
import {classes} from 'typestyle';
import { Theme } from 'theme';
import {Intent} from 'types';
import { getContrastColor, Styles, useStyles } from 'utils';
import { createBackground } from 'utils/createBackground';
import { interactable } from 'types/Interactable';

const styles: Styles = {
    base: {
        background: Theme.PoryBlue,
        color: getContrastColor(Theme.PoryBlue),
        border: `1px solid ${color(Theme.PoryBlue).darken(0.2).toString()}`,
        padding: `0.25rem .5rem`,
        borderRadius: '0.33rem',
        fontSize: '0.85rem',
        cursor: 'pointer',
    },
    ghost: {
        ...createBackground(Theme.Background),
        border: `1px solid ${color(Theme.PoryBlue)}`,
    },
    disabled: {

    }
};

export interface ButtonProps extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    intent?: Intent;
    ghost?: boolean;
}

export function Button({
    ghost,
    disabled,
    intent,
    ...props
}: ButtonProps) {
    const cx = useStyles(styles);
    const className = classes(
        cx.base,
        ghost && cx.ghost,
        disabled && interactable.disabled,
    );

    return <button className={className} data-testid='button' {...props} />
}