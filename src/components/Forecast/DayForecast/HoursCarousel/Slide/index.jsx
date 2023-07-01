import { useSelector } from "react-redux";

import styles from "./slide.module.scss";

const icons = require.context("/src/icons");

const Slide = ({ time, temperature, condition, isDay }) => {
  const degreesMode = useSelector((state) => state.degreesMode.mode);
  const htmlTime = time.split(" ")[1];
  const iconPath = `./${isDay ? "day" : "night"}/${condition.code}.svg`;
  const сelsius = Math.round(temperature.c);
  const fahrenheit = Math.round(temperature.f);

  return (
    <div className={styles.root}>
      <div>{htmlTime}</div>
      <img className={styles.icon} src={icons(iconPath)} alt={condition.text} />
      <div className={styles.temperature}>
        {degreesMode === "C" ? сelsius : fahrenheit}°
      </div>
    </div>
  );
};

export default Slide;
