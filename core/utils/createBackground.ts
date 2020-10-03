import { getContrastColor } from "./getContrastColor";
/**
 * Creates an object with a background & color for styling
 * @param color a color string
 */
export const createBackground = (color?: string) => ({
    background: color,
    color: getContrastColor(color),
});