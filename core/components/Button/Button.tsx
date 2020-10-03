import { color } from 'csx';
import React, { ButtonHTMLAttributes } from 'react';
import {classes} from 'typestyle';
import { Theme } from 'theme';
import {Intent} from 'types';
import { getContrastColor, Styles, useStyles } from 'utils';
import { createBackground } from 'utils/createBackground';

const styles: Styles = {
    base: {
        background: Theme.PoryBlue,
        color: getContrastColor(Theme.PoryBlue),
        border: `1px solid ${color(Theme.PoryBlue).darken(0.2).toString()}`,
        padding: `0.25rem .75rem`,
        borderRadius: '0.2rem',
        fontSize: '0.85rem',
        cursor: 'pointer',
        boxShadow: `0 0 2px rgba(0, 0, 0, 0.2)`,
    },
    focus: {
        outline: `2px solid ${Theme.PoryBlue}`,
    },
    ghost: {
        ...createBackground(Theme.Background),
        border: `1px solid ${color(Theme.PoryBlue)}`,
    },
    disabled: {
        ...createBackground(color(Theme.PoryBlue).desaturate(0.5).toString()),

    },
    [Intent.Primary]: {
        ...createBackground(Theme.PoryBlue),
    },
    [Intent.Warn]: {

    },
    [Intent.Danger]: {
        ...createBackground(Theme.PoryRed),
    },
    [Intent.Success]: {

    },
    
};

export interface ButtonProps extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    intent?: Intent;
    ghost?: boolean;
}

/**
 *  Buttons trigger actions when clicked.
 */
export function Button({
    ghost,
    disabled,
    intent,
    ...props
}: ButtonProps) {
    const cx = useStyles(styles);
    const className = classes(
        cx.base,
        cx[intent ?? 'primary'],
        disabled && cx.disabled,
        ghost && cx.ghost,
    );

    return <button className={className} data-testid='button' {...props} />
}