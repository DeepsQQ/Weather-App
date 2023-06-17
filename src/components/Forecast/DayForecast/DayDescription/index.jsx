import styles from "./dayDescription.module.scss";

const DayDescription = ({ unixTimestamp, weatherData }) => {
  const { avghumidity, maxwind_kph, uv } = weatherData;
  const forecastDate = new Date(unixTimestamp * 1000);

  const intlDateTime = Intl.DateTimeFormat("en", {
    month: "long",
    weekday: "long",
  });
  const intlRelativeTime = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  const [month, weekday] = intlDateTime.format(forecastDate).split(" ");

  const forecastDay = forecastDate.getDate();
  const dayNow = new Date().getDate();
  const differenceBetweenDays = forecastDay - dayNow;
  const relativeTime = intlRelativeTime.format(differenceBetweenDays, "day");

  const htmlRelativeTime = /\d+/.test(relativeTime) ? weekday : relativeTime;

  return (
    <div className={styles.root}>
      <time className={styles.date} dateTime={forecastDate.toISOString()}>
        <div className={styles.day}>{forecastDay}</div>
        <div className={styles.month}>
          {month},
          <br />
          {htmlRelativeTime}
        </div>
      </time>
      <ul className={styles.weather}>
        <li>
          <span className={styles.title}>Humidity:&nbsp;</span>
          <span>{avghumidity}%</span>
        </li>
        <li>
          <span className={styles.title}>Wind:&nbsp;</span>
          <span>{maxwind_kph} km/h</span>
        </li>
        <li>
          <span className={styles.title}>UV-Index:&nbsp;</span>
          <span>{uv}</span>
        </li>
      </ul>
    </div>
  );
};

export default DayDescription;
