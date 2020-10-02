import * as React from 'react';

export type HTMlDivProps = React.HTMLAttributes<HTMLDivElement>;

export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type HTMLImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export interface BaseProps {
    className?: string;
}

