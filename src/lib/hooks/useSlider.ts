import { useEffect, useRef, useState } from "react";

export const useSlider = (dataLength: number) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const moveRight = () => {
    setActiveSlide((p) => (p + 1 >= dataLength ? 0 : p + 1));
  };

  const moveLeft = () => {
    setActiveSlide((p) => (p - 1 < 0 ? dataLength - 1 : p - 1));
  };

  useEffect(() => {
    if (!timeoutRef.current) {
      timeoutRef.current = setInterval(() => {
        moveRight();
      }, 10000);

      return () => {
        clearInterval(timeoutRef.current);
        timeoutRef.current = undefined;
      };
    }
  }, [activeSlide]);

  return { activeSlide, moveLeft, moveRight };
};
