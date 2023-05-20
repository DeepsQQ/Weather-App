import styles from "./primaryWindow.module.scss";

import TimeAndGeolocation from "./TimeAndGeolocation";

const PrimaryWindow = () => {
  return (
    <div className={styles.root}>
      <TimeAndGeolocation />
    </div>
  );
};

export default PrimaryWindow;
