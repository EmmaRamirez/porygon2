import { stylesheet } from 'typestyle';
import { useState, useEffect } from 'react';

export function useStyles(
  styles: Parameters<typeof stylesheet>[0],
): {
  [x: string]: string;
} {
  const [stylesCreated, setStylesCreated] = useState({});

  useEffect(() => {
    setStylesCreated(stylesheet(styles));
    return () => setStylesCreated({});
  }, [styles]);

  return stylesCreated;
}