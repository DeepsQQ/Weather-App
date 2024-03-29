import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";

import styles from "./currentWeather.module.scss";

import { fetchWeatherByGeolocation } from "../../store/weatherDataSlice";

import dayBackground from "./DayBackground.jpg";
import nightBackground from "./NightBackground.jpg";

import PrimaryWindow from "./PrimaryWindow";
import SecondaryWindow from "./SecondaryWindow";

const CurrentWeather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherByGeolocation());
  }, []);

  const weatherData = useSelector((state) => state.weatherData.current);

  let backgroundPath = "";

  if (weatherData) {
    backgroundPath = `url(${
      weatherData.is_day ? dayBackground : nightBackground
    })`;
  }

  return (
    <>
      <main className={styles.root} style={{ backgroundImage: backgroundPath }}>
        <div className={styles.container}>
          {weatherData ? (
            <>
              <PrimaryWindow />
              <SecondaryWindow />
            </>
          ) : (
            <>
              <Skeleton height={"11rem"} />
              <Skeleton height={"11rem"} />
            </>
          )}
        </div>
      </main>
      <div className={styles.separator}></div>
    </>
  );
};

export default CurrentWeather;
