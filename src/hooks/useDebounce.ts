import { useEffect, useState } from "react";

export type IProps = {
  value: string;
  delay: number;
};

const useDebounce = ({ value, delay }: IProps): string => {
  const [dValue, setDValue] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return dValue;
};

export default useDebounce;
