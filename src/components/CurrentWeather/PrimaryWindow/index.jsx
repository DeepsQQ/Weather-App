import styles from "./primaryWindow.module.scss";

import TimeAndGeolocation from "./TimeAndGeolocation";
import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription";

const PrimaryWindow = () => {
  return (
    <div className={styles.root}>
      <TimeAndGeolocation />
      <div className={styles.weatherInfo}>
        <Temperature />
        <WeatherDescription />
      </div>
    </div>
  );
};

export default PrimaryWindow;
