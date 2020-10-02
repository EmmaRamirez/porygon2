import {getContrastColor} from '../getContrastColor';

describe('getContrastColor', () => {
    it('works', () => {
        expect(getContrastColor('#fff')).toBe('#000');
        expect(getContrastColor('#000')).toBe('#fff');
        expect(getContrastColor(undefined)).toBe('#000');
    });
});
