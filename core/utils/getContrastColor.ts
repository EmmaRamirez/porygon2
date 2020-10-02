import {color} from 'csx';

export const getContrastColor = (c?: string) => c ? color(c).lightness() > 0.5 ? '#000' : '#fff' : '#000';