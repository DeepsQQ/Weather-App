import { useSelector } from "react-redux";
import styles from "./timeAndGeolocation.module.scss";

const TimeAndGeolocation = () => {
  const { localtime, name, country } = useSelector(
    (state) => state.weatherData.location
  );

  const dateTime = localtime.replace(/(?<=\s)\b(?=\d:)/, 0);
  const time = dateTime.split(" ")[1];

  return (
    <div className={styles.root}>
      <div className={styles.time}>
        <svg
          className={styles.timeIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="179"
          height="179"
          viewBox="0 0 179 179"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9 89.5C17.9 49.9564 49.9564 17.9 89.5 17.9C129.044 17.9 161.1 49.9564 161.1 89.5C161.1 129.044 129.044 161.1 89.5 161.1C49.9564 161.1 17.9 129.044 17.9 89.5ZM89.5 0C40.0705 0 0 40.0705 0 89.5C0 138.929 40.0705 179 89.5 179C138.929 179 179 138.929 179 89.5C179 40.0705 138.929 0 89.5 0ZM98.45 35.8C98.45 30.8571 94.4431 26.85 89.5 26.85C84.5569 26.85 80.55 30.8571 80.55 35.8V89.5C80.55 91.8735 81.4933 94.1504 83.1715 95.8285L110.021 122.679C113.516 126.174 119.184 126.174 122.679 122.679C126.174 119.184 126.174 113.516 122.679 110.021L98.45 85.7929V35.8Z"
            fill="white"
            stroke="white"
            strokeWidth="0.00064"
          />
        </svg>
        <time dateTime={dateTime}>{time}</time>
      </div>
      <div className={styles.location}>{`${name}, ${country}`}</div>
    </div>
  );
};

export default TimeAndGeolocation;
