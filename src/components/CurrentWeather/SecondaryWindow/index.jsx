import styles from "./secondaryWindow.module.scss";

import DayProgress from "./DayProgress";
import AdditionalWeatherInfo from "./AdditionalWeatherInfo";

function SecondaryWindow() {
  return (
    <div className={styles.root}>
      <DayProgress />
      <AdditionalWeatherInfo />
    </div>
  );
}

export default SecondaryWindow;
