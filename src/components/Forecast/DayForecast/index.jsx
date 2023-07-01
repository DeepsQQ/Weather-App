import styles from "./dayForecast.module.scss";

import DayDescription from "./DayDescription";
import HoursCarousel from "./HoursCarousel";
import Astronomy from "./Astronomy";

const DayForecast = ({ dayData }) => {
  return (
    <article className={styles.root}>
      <DayDescription
        unixTimestamp={dayData.date_epoch}
        weatherData={dayData.day}
      />
      <HoursCarousel hoursArray={dayData.hour} />
      <Astronomy astroData={dayData.astro} />
    </article>
  );
};

export default DayForecast;
