import styles from "./primaryWindow.module.scss";

import TimeAndGeolocation from "./TimeAndGeolocation";
import Temperature from "./Temperature";

const PrimaryWindow = () => {
  return (
    <div className={styles.root}>
      <TimeAndGeolocation />
      <div className={styles.weatherInfo}>
        <Temperature />
      </div>
    </div>
  );
};

export default PrimaryWindow;
