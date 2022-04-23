import { useEffect, useState } from 'react';

export const usePersistState = (key, defaultValue) => {
  const [state, setState] = useState(
    () => {
      if(typeof window !== 'undefined'){
        return JSON.parse(window.localStorage.getItem(key)) || defaultValue
      }
      return ''
    },
  );

  useEffect(() => {
    if(typeof window !== 'undefined'){
      if (state) {
        window.localStorage.setItem(key, JSON.stringify(state));
      } else {
        window.localStorage.removeItem(key);
      }
    }

  }, [key, state]);

  const setPersistState = data => {
    if (typeof data === 'object') {
      setState(prevData => ({ ...prevData, ...data }));
    } else {
      setState(data);
    }
  };

  return [state, setPersistState];
};
