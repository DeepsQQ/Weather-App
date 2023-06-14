import styles from "./dayForecast.module.scss";

import DayDescription from "./DayDescription";

const DayForecast = ({ dayData }) => {
  return (
    <article className={styles.root}>
      <DayDescription unixDate={dayData.date_epoch} weatherData={dayData.day} />
    </article>
  );
};

export default DayForecast;
