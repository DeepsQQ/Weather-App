import { useSwiper } from "swiper/react";
import styles from "./buttonNext.module.scss";

import { useDisabled } from "../../../../../utils/hooks";

const ButtonNext = () => {
  const swiper = useSwiper();
  const isDisabled = useDisabled(swiper, "end");

  const onClickButton = () => () => {
    swiper.slideNext();
  };

  return (
    <button
      className={styles.root}
      disabled={isDisabled}
      onClick={onClickButton()}
    >
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="130"
        viewBox="0 0 130 130"
        fill="none"
      >
        <path
          d="M29.5984 6.04809C27.7212 7.78687 26.6667 10.1449 26.6667 12.6035C26.6667 15.0621 27.7212 17.4201 29.5984 19.1589L79.1636 65.056L29.5984 110.953C27.7744 112.702 26.7651 115.044 26.788 117.475C26.8108 119.906 27.8638 122.232 29.7204 123.951C31.5769 125.67 34.0883 126.645 36.7137 126.666C39.3392 126.687 41.8685 125.753 43.757 124.064L100.402 71.6114C102.279 69.8726 103.333 67.5146 103.333 65.056C103.333 62.5973 102.279 60.2394 100.402 58.5006L43.757 6.04809C41.8793 4.30983 39.3328 3.33333 36.6777 3.33333C34.0226 3.33333 31.4761 4.30983 29.5984 6.04809Z"
          fill="#252525"
          stroke="#252525"
          strokeWidth="0.0625"
        />
      </svg>
    </button>
  );
};

export default ButtonNext;
