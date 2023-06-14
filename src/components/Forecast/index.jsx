import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

import styles from "./forecast.module.scss";

import DayForecast from "./DayForecast";

const ForecastSkeleton = ({ count }) => {
  const skeletons = Array.from(Array(count), (value, index) => (
    <div key={index} className={styles.skeleton}>
      <Skeleton height={140} />
      <Skeleton height={140} />
    </div>
  ));

  return skeletons;
};

const Forecast = () => {
  const forecastData = useSelector((state) => state.weatherData.forecast);

  const forecastDays = forecastData.map((dayData) => (
    <DayForecast dayData={dayData} />
  ));

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {forecastData ? forecastDays : <ForecastSkeleton count={3} />}
      </div>
    </div>
  );
};

export default Forecast;
