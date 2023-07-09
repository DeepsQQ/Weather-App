import { useSelector } from "react-redux";

import styles from "./temperature.module.scss";

const icons = require.context("/src/icons");

const Temperature = () => {
  const { temp_c, temp_f, feelslike_c, feelslike_f, is_day, condition } =
    useSelector((state) => state.weatherData.current);
  const degreesMode = useSelector((state) => state.degreesMode.mode);

  const iconPath = `./${is_day ? "day" : "night"}/${condition.code}.svg`;
  const degrees = degreesMode === "C" ? temp_c : temp_f;
  const feelsLike = degreesMode === "C" ? feelslike_c : feelslike_f;

  return (
    <div className={styles.root}>
      <div className={styles.temperature}>
        <div className={styles.degrees}>{Math.trunc(degrees)}</div>
        <div className={styles.degreesMode}>{`°${degreesMode}`}</div>
        <img
          className={styles.weatherIcon}
          src={icons(iconPath)}
          alt={condition.text}
        />
      </div>
      <div>
        <div className={styles.feelsLike}>{`Feels like ${Math.trunc(
          feelsLike
        )}°`}</div>
        <div className={styles.weatherText}>{condition.text}</div>
      </div>
    </div>
  );
};

export default Temperature;
