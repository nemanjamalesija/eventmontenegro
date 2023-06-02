import { useEffect } from 'react';

const useStickyNav = (navRef: any) => {
  useEffect(() => {
    const currentNavRef = navRef.current;

    return () => {
      if (currentNavRef) {
        currentNavRef.classList.remove('sticky');
      }
    };
  }, [navRef]);
};

export default useStickyNav;
