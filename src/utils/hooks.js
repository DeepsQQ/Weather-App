import { useEffect, useState } from "react";

export const useDisabled = (swiper, position) => {
  const isStart = position === "start";

  const initialValue = isStart ? swiper.isBeginning : swiper.isEnd;
  const [isPosition, setIsPosition] = useState(initialValue);

  const onReachPosition = () => {
    setIsPosition(true);
  };

  const onFromEdge = () => {
    setIsPosition(false);
  };

  useEffect(() => {
    if (isStart) {
      swiper.on("reachBeginning", onReachPosition);
    } else {
      swiper.on("reachEnd", onReachPosition);
    }

    swiper.on("fromEdge", onFromEdge);

    return () => {
      if (isStart) {
        swiper.off("reachBeginning", onReachPosition);
      } else {
        swiper.off("reachEnd", onReachPosition);
      }

      swiper.off("fromEdge", onFromEdge);
    };
  }, []);

  return isPosition;
};
