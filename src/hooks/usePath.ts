// usePath.ts
import { useMemo } from 'react';

export const usePath = (name: React.ReactNode): string => {
  return useMemo(() => {
    switch (name) {
      case 'Home':
        return '/';
      case 'About':
        return '/about';
      case 'Contact':
        return '/contact';
      case 'Project':
        return '/project';
      default:
        return '/';
    }
  }, [name]);
};

export default usePath;