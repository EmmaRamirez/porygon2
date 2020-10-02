import React from 'react';
import { getContrastColor } from 'utils/getContrastColor';
import {color as createColor} from 'csx';

export interface SwatchProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string;
    size?: number;
    displayAs?: 'rgba' | 'hex';
}

export function Swatch({color = '#fff', size = 6, displayAs = 'hex'}: SwatchProps) {
    return <div
        style={{
            backgroundColor: color,
            color: getContrastColor(color),
            height: `${size}rem`,
            width: `${size}rem`,
            margin: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontFamily: 'Arial',
            cursor: 'pointer',
        }}
    >
        {createColor(color)[displayAs === 'hex' ? 'toHexString' : 'toString']()}
    </div>
}