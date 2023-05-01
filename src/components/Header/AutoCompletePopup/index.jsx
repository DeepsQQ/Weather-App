import styles from "./AutoCompletePopup.module.scss";

const AutoCompletePopup = ({ searchResults }) => {
  return (
    <div className={styles.popup}>
      {searchResults.map((location) => (
        <div className={styles.popupRow} key={location.id}>
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
