import { useSwiper } from "swiper/react";
import styles from "./buttonPrev.module.scss";

import { useDisabled } from "../../../../../utils/hooks";

const ButtonPrev = () => {
  const swiper = useSwiper();
  const isDisabled = useDisabled(swiper, "start");

  const onClickButton = () => () => {
    swiper.slidePrev();
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
          d="M100.402 6.04809C102.279 7.78687 103.333 10.1449 103.333 12.6035C103.333 15.0621 102.279 17.4201 100.402 19.1589L50.8363 65.056L100.402 110.953C102.226 112.702 103.235 115.044 103.212 117.475C103.189 119.906 102.136 122.232 100.28 123.951C98.4231 125.67 95.9117 126.645 93.2862 126.666C90.6608 126.687 88.1315 125.753 86.243 124.064L29.5984 71.6114C27.7212 69.8726 26.6667 67.5146 26.6667 65.056C26.6667 62.5973 27.7212 60.2394 29.5984 58.5006L86.243 6.04809C88.1207 4.30983 90.6671 3.33333 93.3223 3.33333C95.9774 3.33333 98.5239 4.30983 100.402 6.04809Z"
          fill="#252525"
          stroke="#252525"
          strokeWidth="0.0625"
        />
      </svg>
    </button>
  );
};

export default ButtonPrev;
