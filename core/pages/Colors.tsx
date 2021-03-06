import { Swatch } from 'components/Swatch';
import React from 'react';

import './page.css';

export interface ColorProps {
  darkMode?: boolean;
}

export const Colors: React.FC<ColorProps> = ({darkMode} = {darkMode: false}) => (
  <article>
    {darkMode ? 'Dark Mode' : 'Light Mode'}
    {[
        '#a6e6ff',
        '#ffa6d4',
        '#3dc2ff',
        '#773dff',
        '#3dffe5'
    ].map(c => <Swatch color={c} />)}
    <section>
      
      <div className="tip-wrapper">
        <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
);
