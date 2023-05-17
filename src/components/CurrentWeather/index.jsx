import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";

import styles from "./currentWeather.module.scss";

import dayBackground from "./DayBackground.jpg";
import nightBackground from "./NightBackground.jpg";
import { fetchWeatherByGeolocation } from "../../store/weatherDataSlice";

const CurrentWeather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherByGeolocation());
  }, []);

  const weatherData = useSelector((state) => state.weatherData.currentWeather);

  let backgroundPath = "";

  if (weatherData) {
    backgroundPath = `url(${
      weatherData.is_day ? dayBackground : nightBackground
    })`;
  }

  return (
    <main className={styles.root} style={{ backgroundImage: backgroundPath }}>
      <div className={styles.container}>
        {weatherData ? (
          true
        ) : (
          <>
            <Skeleton height={"13.75rem"} />
            <Skeleton height={"13.75rem"} />
          </>
        )}
      </div>
    </main>
  );
};

export default CurrentWeather;
