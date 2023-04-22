import React from "react";
import styles from "./degreesSwitch.module.scss";

const DegreesSwitch = () => {
  const [degrees, setDegrees] = React.useState("C");

  const buttonClick = (arg) => setDegrees(arg === "C" ? "C" : "F");

  return (
    <div className={styles.root}>
      <button
        className={`${styles.button} ${
          degrees === "C" ? styles.buttonActive : ""
        }`}
        onClick={() => buttonClick("C")}
      >
        °C
      </button>
      <button
        className={`${styles.button} ${
          degrees === "F" ? styles.buttonActive : ""
        }`}
        onClick={() => buttonClick("F")}
      >
        °F
      </button>
    </div>
  );
};

export default DegreesSwitch;
