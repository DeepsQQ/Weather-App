import React from "react";
import { useDispatch } from "react-redux";

import styles from "./autoCompletePopup.module.scss";
import { fetchWeather } from "../../../store/weatherDataSlice";

const AutoCompletePopup = ({ searchResults, setPopupVisible }) => {
  const dispatch = useDispatch();

  const onRowClick = (latitude, longitude) => {
    dispatch(fetchWeather(`${latitude},${longitude}`));
    setPopupVisible(false);
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
