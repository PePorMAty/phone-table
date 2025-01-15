import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

interface useOutsideClickProps<T extends HTMLElement = HTMLElement> {
  ref: RefObject<T>;
  handler: (event: Event) => void;
  expectElementRef?: RefObject<T>;
}

export const useOutsideClick = ({
  ref,
  handler,
  expectElementRef,
}: useOutsideClickProps) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      const expectEl = expectElementRef?.current;
      const hasElTarget = el?.contains((event?.target as Node) || null);
      const hasExpectElTarget = expectEl?.contains(
        (event?.target as Node) || null,
      );
      const shouldNotHandle = !el || hasElTarget || hasExpectElTarget;

      if (shouldNotHandle) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
