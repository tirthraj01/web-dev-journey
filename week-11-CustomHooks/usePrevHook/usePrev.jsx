import { useEffect, useRef } from "react";

export const usePrev = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value; // 1
  }, [value]);

  return ref.current; // undefined
};

// it returns first, effect gets called later
