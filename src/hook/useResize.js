import { useCallback, useEffect, useState } from "react";
import { throttle } from "lodash";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleSize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", throttle(handleSize, 200));

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [handleSize]);

  return width;
}
