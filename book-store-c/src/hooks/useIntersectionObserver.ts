import { Book } from '@/models/book.model';
import { useEffect, useRef } from 'react';

type Callback = (entries: IntersectionObserverEntry[]) => void;

interface ObserverOptions {
  root?: Element | null; //관찰 되는것들의 기준점
  rootMargin?: string; //교차되는 거리
  threshold?: number | number[]; //타겟으로 하는 엘레먼트가 몇퍼센트가 화면에 보이고 있는지
}

export const useIntersectionObserver = (
  books: Book[],
  callback: Callback,
  options?: ObserverOptions
) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [books]);

  return targetRef;
};
