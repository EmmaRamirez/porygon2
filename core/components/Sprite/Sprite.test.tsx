import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sprite } from '.';

describe('Sprite', () => {
    it('renders', () => {
        render(<Sprite alt='porygon' sprite={'porygon.png'} />);
        expect(screen.getByAltText('porygon')).toBeDefined();
    });
});
