import { useEffect, useRef } from 'react';

type IntersectionObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverOptions = {},
) => {
  const observerTarget = useRef<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!observerTarget.current) return;

    const observerOptions: IntersectionObserverOptions = {
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
      threshold: options.threshold || 0.5,
    };

    observer.current = new IntersectionObserver(callback, observerOptions);

    if (observerTarget.current) {
      observer.current.observe(observerTarget.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback, options]);

  return observerTarget;
};

export default useIntersectionObserver;
