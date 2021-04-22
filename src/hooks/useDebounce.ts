import { useEffect, useState } from "react";
import { DEBOUNCE_DELAY } from "../assets/js/constants";

export const useDebounce = <T>(value: T, delay = DEBOUNCE_DELAY): T => {
  const [debValue, setDebValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debValue;
};
