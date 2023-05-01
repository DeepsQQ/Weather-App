import React from "react";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import styles from "./LocationInput.module.scss";
import { fetchResults, setResults } from "../../../store/autoCompleteSlice";

const PopupRow = ({ city, region, country }) => {
  const location = region ? region + ", " + country : country;

  return (
    <div className={styles.popupRow}>
      <div className={styles.popupCity}>{city}</div>
      <div className={styles.popupRegion}>{location}</div>
    </div>
  );
};

const LocationSearch = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState("");
  const searchResults = useSelector((state) => state.autoComplete.results);
  const inputRef = React.useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchDebounce = React.useCallback(
    debounce(async (value) => {
      if (!/\d/.test(value) && value.trim() && value.length >= 3) {
        dispatch(fetchResults(value));
      } else {
        dispatch(setResults([]));
      }
    }, 300),
    []
  );

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
    searchDebounce(e.target.value);
  };

  const onClickClear = () => {
    setInputValue("");
    dispatch(setResults([]));
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search city"
        value={inputValue}
        onChange={onChangeInput}
        className={styles.input}
      />

      {inputValue ? (
        <button onClick={onClickClear} className={styles.clearIconButton}>
          <svg
            className={styles.clearIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 20L4 4.00003M20 4L4.00002 20"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
      ) : (
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="165"
          height="165"
          viewBox="0 0 165 165"
          fill="none"
        >
          <g clipPath="url(#clip0_8_29)">
            <path
              d="M165 0H0V165H165V0Z"
              stroke="black"
              strokeWidth="0.00064"
            />
            <path
              d="M161.989 140.116L124.09 102.218C130.412 91.9875 134.063 79.9322 134.063 67.0313C134.063 30.0094 104.053 0 67.0313 0C30.0094 0 0 30.0094 0 67.0313C0 104.053 30.0094 134.063 67.0313 134.063C79.9322 134.063 91.9875 130.412 102.218 124.09L140.116 161.989C144.128 166 150.686 166 154.698 161.989L161.989 154.698C166 150.686 166 144.128 161.989 140.116ZM34.2169 99.8456C25.4513 91.08 20.625 79.4269 20.625 67.0313C20.625 54.6356 25.4513 42.9825 34.2169 34.2169C42.9825 25.4513 54.6356 20.625 67.0313 20.625C79.4269 20.625 91.08 25.4513 99.8456 34.2169C108.611 42.9825 113.438 54.6356 113.438 67.0313C113.438 79.4269 108.611 91.08 99.8456 99.8456C91.08 108.611 79.4269 113.438 67.0313 113.438C54.6356 113.438 42.9825 108.611 34.2169 99.8456Z"
              fill="black"
              stroke="black"
              strokeWidth="0.00064"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_29">
              <rect width="165" height="165" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}

      {searchResults.length > 0 && (
        <div className={styles.popup}>
          {searchResults.map((location) => (
            <PopupRow
              key={location.id}
              city={location.name}
              region={location.region}
              country={location.country}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default LocationSearch;
