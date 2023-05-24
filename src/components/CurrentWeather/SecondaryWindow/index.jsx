import styles from "./secondaryWindow.module.scss";

import DayProgress from "./DayProgress";

function SecondaryWindow() {
  return (
    <div className={styles.root}>
      <DayProgress />
    </div>
  );
}

export default SecondaryWindow;
