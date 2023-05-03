import { useDispatch } from "react-redux";

import styles from "./AutoCompletePopup.module.scss";
import { fetchWeather } from "../../../store/weatherDataSlice";

const AutoCompletePopup = ({ searchResults }) => {
  const dispatch = useDispatch();

  const onRowClick = (latitude, longitude) => {
    dispatch(fetchWeather(`${latitude},${longitude}`));
  };

  return (
    <div className={styles.popup}>
      {searchResults.map((location) => (
        <div
          className={styles.popupRow}
          key={location.id}
          onClick={() => onRowClick(location.lat, location.lon)}
        >
          <div className={styles.popupCity}>{location.name}</div>
          <div className={styles.popupRegion}>
            {location.region
              ? location.region + ", " + location.country
              : location.country}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutoCompletePopup;
