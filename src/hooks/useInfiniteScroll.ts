import { useEffect, useRef, useState } from 'react';

type IntersectionObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useInfiniteScroll = <T extends Element>(
  callback: () => Promise<void>,
  options: IntersectionObserverOptions = {},
) => {
  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<T>(null);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observerOptions: IntersectionObserverOptions = {
      root: options.root || null,
      rootMargin: options.rootMargin || '80px',
      threshold: options.threshold || 1.0,
    };

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isFetching) {
        setIsFetching(true);
        callback()
          .then(() => setIsFetching(false))
          .catch(() => setIsFetching(false));
      }
    }, observerOptions);

    observer.current.observe(sentinelRef.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback, isFetching, options]);

  return [sentinelRef, isFetching] as const;
};

export default useInfiniteScroll;
