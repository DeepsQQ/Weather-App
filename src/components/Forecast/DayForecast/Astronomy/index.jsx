import {
  AMAndPMTo24hours,
  getDifferenceBetweenTime,
} from "../../../../utils/functions";

import styles from "./astronomy.module.scss";

const Astronomy = ({ astroData }) => {
  const sunrise = AMAndPMTo24hours(astroData.sunrise);
  const sunset = AMAndPMTo24hours(astroData.sunset);

  const [dayHours, dayMinutes] = getDifferenceBetweenTime(sunrise, sunset);

  return (
    <div className={styles.root}>
      <div className={styles.progressBar}>
        <svg
          className={styles.progressBarImage}
          xmlns="http://www.w3.org/2000/svg"
          width="233"
          height="58"
          viewBox="0 0 233 58"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M230.385 55.1851C201.098 22.2739 160.721 1.93333 116.137 1.93333C71.5349 1.93333 31.1443 22.2894 1.8562 55.2218"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 5"
          />
          <path
            d="M1.8562 55.1851C31.1443 22.2739 71.5193 1.93333 116.104 1.93333C142.61 1.93333 167.628 9.1234 189.712 21.866"
            stroke="#FFC400"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M187.999 27.2941C191.482 27.2941 194.307 24.4303 194.307 20.8971C194.307 17.3638 191.482 14.5 187.999 14.5C184.514 14.5 181.69 17.3638 181.69 20.8971C181.69 24.4281 184.514 27.2941 187.999 27.2941Z"
            fill="#FFCE47"
          />
        </svg>
      </div>
      <div className={styles.description}>
        <svg
          className={styles.sunriseIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.91958 18.6192C9.8928 17.6726 10.0561 16.7301 10.3999 15.8477C10.7437 14.9652 11.2609 14.1607 11.9211 13.4816C12.5812 12.8025 13.3708 12.2627 14.2432 11.8941C15.1156 11.5255 16.053 11.3356 17.0001 11.3356C17.9471 11.3356 18.8846 11.5255 19.757 11.8941C20.6293 12.2627 21.419 12.8025 22.0791 13.4816C22.7392 14.1607 23.2565 14.9652 23.6003 15.8477C23.944 16.7301 24.1074 17.6726 24.0806 18.6192H9.91958Z"
            fill="url(#paint0_radial_598_369)"
          />
          <path
            d="M12.58 4.5305C12.0502 3.21725 10.0796 4.012 10.6109 5.32667L12.24 9.3585C12.7699 10.6732 14.7404 9.877 14.2092 8.56233L12.58 4.5305ZM24.1769 5.372C24.7308 4.06867 22.7744 3.2385 22.2219 4.54183L20.5219 8.54533C19.9694 9.84867 21.9244 10.6802 22.4769 9.37692L24.1769 5.372ZM30.6085 13.9967C31.9232 13.4668 31.127 11.4962 29.8124 12.0275L25.7805 13.6567C24.4673 14.1865 25.262 16.1571 26.5767 15.6258L30.6085 13.9967ZM3.95536 12.0218C2.65203 11.4693 1.82186 13.4243 3.12519 13.9768L7.12869 15.6768C8.43203 16.2307 9.26361 14.2743 7.96028 13.7218L3.95536 12.0218Z"
            fill="#FBB556"
          />
          <path
            d="M27.4891 18.6192H6.51108C6.04477 18.6192 5.66675 18.997 5.66675 19.4629C5.66675 19.9288 6.04477 20.3065 6.51108 20.3065H27.4891C27.9554 20.3065 28.3334 19.9288 28.3334 19.4629C28.3334 18.997 27.9554 18.6192 27.4891 18.6192Z"
            fill="black"
            fillOpacity="0.12"
          />
          <path
            opacity="0.5"
            d="M16.8333 23.6583V29.2244M14 26.3557L16.8305 22.8381L19.6667 26.3557"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <radialGradient
              id="paint0_radial_598_369"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-6.63024 17) rotate(90) scale(691.149 182.752)"
            >
              <stop stopColor="#FFCE47" />
              <stop offset="1" stopColor="#FCBE50" />
            </radialGradient>
          </defs>
        </svg>
        <div className={styles.sunriseTime}>{sunrise}</div>
        <div className={styles.daylightTitle}>Daylight hours:</div>
        <div className={styles.daylightTime}>
          {dayHours}h {dayMinutes}m
        </div>
        <svg
          className={styles.sunsetIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.91958 18.6192C9.8928 17.6726 10.0561 16.7301 10.3999 15.8477C10.7437 14.9652 11.2609 14.1607 11.9211 13.4816C12.5812 12.8025 13.3708 12.2627 14.2432 11.8941C15.1156 11.5255 16.053 11.3356 17.0001 11.3356C17.9471 11.3356 18.8846 11.5255 19.757 11.8941C20.6293 12.2627 21.419 12.8025 22.0791 13.4816C22.7392 14.1607 23.2565 14.9652 23.6003 15.8477C23.944 16.7301 24.1074 17.6726 24.0806 18.6192H9.91958Z"
            fill="url(#paint0_radial_598_379)"
          />
          <path
            d="M12.58 4.5305C12.0502 3.21725 10.0796 4.012 10.6109 5.32667L12.24 9.3585C12.7699 10.6732 14.7404 9.877 14.2092 8.56233L12.58 4.5305ZM24.1769 5.372C24.7308 4.06867 22.7744 3.2385 22.2219 4.54183L20.5219 8.54533C19.9694 9.84867 21.9244 10.6802 22.4769 9.37692L24.1769 5.372ZM30.6085 13.9967C31.9232 13.4668 31.127 11.4962 29.8124 12.0275L25.7805 13.6567C24.4673 14.1865 25.262 16.1571 26.5767 15.6258L30.6085 13.9967ZM3.95536 12.0218C2.65203 11.4693 1.82186 13.4243 3.12519 13.9768L7.12869 15.6768C8.43203 16.2307 9.26361 14.2743 7.96028 13.7218L3.95536 12.0218Z"
            fill="#FBB556"
          />
          <path
            opacity="0.12"
            d="M27.4891 18.6192H6.51108C6.04477 18.6192 5.66675 18.997 5.66675 19.4629C5.66675 19.9288 6.04477 20.3065 6.51108 20.3065H27.4891C27.9554 20.3065 28.3334 19.9288 28.3334 19.4629C28.3334 18.997 27.9554 18.6192 27.4891 18.6192Z"
            fill="black"
          />
          <path
            opacity="0.5"
            d="M16.8333 22.2502V27.8177M14 25.6516L16.8305 29.1677L19.6667 25.6516"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <radialGradient
              id="paint0_radial_598_379"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-6.63024 17) rotate(90) scale(691.149 182.752)"
            >
              <stop stopColor="#FFCE47" />
              <stop offset="1" stopColor="#FCBE50" />
            </radialGradient>
          </defs>
        </svg>
        <div className={styles.sunsetTime}>{sunset}</div>
      </div>
    </div>
  );
};

export default Astronomy;
