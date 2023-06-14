import styles from "./dayDescription.module.scss";

const DayDescription = ({ unixDate, weatherData }) => {
  const date = new Date(unixDate * 1000);

  return (
    <div>
      <time>
        <div className={styles.day}></div>
        <div className={styles.month}></div>
      </time>
      <ul className={styles.weather}>
        <li>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
      </ul>
    </div>
  );
};

export default DayDescription;
