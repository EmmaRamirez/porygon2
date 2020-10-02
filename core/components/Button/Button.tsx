import React from 'react';
import {Intent} from 'types';

export interface ButtonProps extends Partial<React.HTMLAttributes<HTMLButtonElement>> {
    intent?: Intent;
    ghost?: boolean;
}

export function Button(props: ButtonProps) {
    return <button data-testid='button' {...props} style={{background: 'red'}} />
}