import { useEffect, useState } from "react";

import styles from "./header.module.scss";

import DegreesSwitch from "./DegreesSwitch";
import LocationSearch from "./LocationSearch";
import SearchButton from "./SearchButton";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [isInputActive, setInputActive] = useState(false);

  const onResize = () => {
    if (window.innerWidth <= 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div onClick={() => setIsMobile(true)} className={styles.logo}>
          <svg
            className={styles.logoImage}
            xmlns="http://www.w3.org/2000/svg"
            width="314"
            height="235"
            viewBox="0 0 314 235"
            fill="none"
          >
            <ellipse
              cx="78.5"
              cy="76.7347"
              rx="78.5"
              ry="76.7347"
              fill="#FCCC25"
            />
            <path
              d="M250.061 234.726C250.061 234.726 299.583 234.779 306.536 187.413C309.846 135.62 258.664 125.412 258.664 125.412C258.664 125.412 264.487 48.7386 192.626 39.9952C131.037 33.8476 112.295 89.7982 112.295 89.7982C112.295 89.7982 93.7425 72.3641 68.5776 86.606C46.0504 100.199 50.0337 125.087 50.0337 125.087C50.0337 125.087 0 134.594 0 184.441C1.12143 234.226 54.34 234.726 54.34 234.726"
              fill="#73A8E8"
            />
            <path
              d="M250.061 234.726C250.061 234.726 299.583 234.779 306.536 187.413C309.846 135.62 258.664 125.412 258.664 125.412C258.664 125.412 264.487 48.7386 192.626 39.9952C131.037 33.8476 112.295 89.7982 112.295 89.7982C112.295 89.7982 93.7425 72.3641 68.5776 86.606C46.0504 100.199 50.0337 125.087 50.0337 125.087C50.0337 125.087 0 134.594 0 184.441C1.12143 234.226 54.34 234.726 54.34 234.726"
              stroke="#73A8E8"
              strokeWidth="0.00064"
            />
          </svg>
          <span className={styles.title}>Weather</span>
        </div>
        {!isInputActive && <DegreesSwitch />}
        {isMobile && !isInputActive ? (
          <SearchButton setActive={setInputActive} />
        ) : (
          <LocationSearch
            isActive={isInputActive}
            setActive={setInputActive}
            isMobile={isMobile}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
