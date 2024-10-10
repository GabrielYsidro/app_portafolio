// usePath.ts
import { useMemo } from 'react';

export const usePath = (name: React.ReactNode): string => {
  return useMemo(() => {
    switch (name) {
      case 'Home':
        return '/';
      case 'About':
        return '/About';
      case 'Contact':
        return '/Contact';
      case 'Project':
        return '/Project';
      default:
        return '/';
    }
  }, [name]);
};

export default usePath;