import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import styles from "./degreesSwitch.module.scss";
import { setDegreesMode } from "../../../store/degreesModeSlice";

const DegreesSwitch = () => {
  const dispatch = useDispatch();
  const degreesMode = useSelector((state) => state.degreesMode.mode);

  const buttonClick = (mode) => {
    if (degreesMode !== mode) dispatch(setDegreesMode(mode));
  };

  return (
    <div className={styles.root}>
      <button
        className={`${styles.button} ${
          degreesMode === "C" ? styles.buttonActive : ""
        }`}
        onClick={() => buttonClick("C")}
      >
        °C
      </button>
      <button
        className={`${styles.button} ${
          degreesMode === "F" ? styles.buttonActive : ""
        }`}
        onClick={() => buttonClick("F")}
      >
        °F
      </button>
    </div>
  );
};

export default DegreesSwitch;
