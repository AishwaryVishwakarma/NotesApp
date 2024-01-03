'use client';

import React from 'react';

/**
 * This hook will return a boolean based on the query match
 * @param {string[]} query eg. '(max-width: 800px)'
 * @param {boolean} defaultState eg: true/false
 */

const useMediaQuery = (
  query: string,
  defaultState: boolean = false
): boolean => {
  const [matches, setMatches] = React.useState<boolean>(defaultState);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener, {passive: true});
    return () => window.removeEventListener('resize', () => listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
