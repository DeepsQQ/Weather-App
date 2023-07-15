import { useSelector } from "react-redux";

import styles from "./additionalWeatherInfo.module.scss";

const AdditionalWeatherInfo = () => {
  const { vis_km, uv } = useSelector((state) => state.weatherData.current);
  const { moon_phase, moon_illumination } = useSelector(
    (state) => state.weatherData.forecast[0].astro
  );

  return (
    <ul className={styles.root}>
      <li className={styles.listItem}>
        <span className={styles.title}>UV-Index:&nbsp;</span>
        <span>{uv}</span>
      </li>
      <li className={styles.listItem}>
        <span className={styles.title}>Visibility:&nbsp;</span>
        <span>{vis_km + " km"}</span>
      </li>
      <li className={styles.listItem}>
        <span className={styles.title}>Moon Illumination:&nbsp;</span>
        <span>{moon_illumination + "%"}</span>
      </li>
      <li className={styles.listItem}>
        <span className={styles.title}>Moon Phase:&nbsp;</span>
        <span>{moon_phase}</span>
      </li>
    </ul>
  );
};

export default AdditionalWeatherInfo;
