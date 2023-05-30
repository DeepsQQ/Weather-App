import { useSelector } from "react-redux";
import styles from "./dayProgress.module.scss";

const AMAndPMTo24hours = (time) => {
  let time24hours = time;

  if (time24hours.includes("PM")) {
    const hours = +time24hours.split(":")[0];
    time24hours = time24hours.replace(/.+(?=:)/, hours + 12);
  }

  return time24hours.split(/\s/)[0];
};

const getDifferenceBetweenTime = (firstDate, secondDate) => {
  const getDate = (string) =>
    new Date(0, 0, 0, string.split(":")[0], string.split(":")[1]);
  const different = getDate(secondDate) - getDate(firstDate);
  let differentRes, hours, minutes;
  if (different > 0) {
    differentRes = different;
    hours = Math.floor((differentRes % 86400000) / 3600000);
    minutes = Math.round(((differentRes % 86400000) % 3600000) / 60000);
  } else {
    differentRes = Math.abs(getDate(firstDate) - getDate(secondDate));
    hours = Math.floor(24 - (differentRes % 86400000) / 3600000);
    minutes = Math.round(60 - ((differentRes % 86400000) % 3600000) / 60000);
  }

  return [hours, minutes];
};

function DayProgress() {
  const { sunrise, sunset } = useSelector(
    (state) => state.weatherData.forecast[0].astro
  );

  const sunrise24hours = AMAndPMTo24hours(sunrise);
  const sunset24hours = AMAndPMTo24hours(sunset);

  const [daylightHours, daylightMinutes] = getDifferenceBetweenTime(
    sunrise24hours,
    sunset24hours
  );
  const daylightTime = `${daylightHours}h ${daylightMinutes}m`;

  return (
    <div className={styles.root}>
      <div>
        <svg
          className={styles.sunIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="33"
          viewBox="0 0 39 33"
          fill="none"
        >
          <g clipPath="url(#clip0_81_41)">
            <path
              d="M16.0917 5.21268L19.9917 1.40425L23.8917 5.21268"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.9916 10.9254V1.40427"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0842 30.642C10.048 29.3696 10.269 28.1028 10.7344 26.9166C11.1997 25.7305 11.8999 24.649 12.7934 23.7362C13.6869 22.8234 14.7557 22.0979 15.9366 21.6024C17.1174 21.107 18.3863 20.8517 19.6682 20.8517C20.9502 20.8517 22.2191 21.107 23.3999 21.6024C24.5807 22.0979 25.6495 22.8234 26.5431 23.7362C27.4366 24.649 28.1368 25.7305 28.6021 26.9166C29.0674 28.1028 29.2885 29.3696 29.2523 30.642H10.0842Z"
              fill="url(#paint0_radial_81_41)"
            />
            <path
              d="M13.6854 11.7047C12.9683 9.93948 10.3009 11.0077 11.02 12.7749L13.2252 18.1943C13.9424 19.9614 16.6097 18.8912 15.8906 17.1241L13.6854 11.7047ZM29.3827 12.8358C30.1324 11.0839 27.4843 9.96804 26.7364 11.7199L24.4353 17.1012C23.6875 18.8531 26.3337 19.9709 27.0816 18.219L29.3827 12.8358ZM38.0884 24.4287C39.868 23.7165 38.7903 21.0677 37.0108 21.7818L31.5534 23.9716C29.7758 24.6838 30.8515 27.3326 32.631 26.6185L38.0884 24.4287ZM2.01125 21.7742C0.247088 21.0315 -0.876609 23.6594 0.887557 24.402L6.30661 26.6871C8.07078 27.4316 9.19639 24.8019 7.43223 24.0592L2.01125 21.7742Z"
              fill="#FBB556"
            />
            <path
              d="M34.1877 30.4385H5.86487C5.23529 30.4385 4.72491 31.0119 4.72491 31.7192C4.72491 32.4266 5.23529 33 5.86487 33H34.1877C34.8173 33 35.3277 32.4266 35.3277 31.7192C35.3277 31.0119 34.8173 30.4385 34.1877 30.4385Z"
              fill="white"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_81_41"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-12.3173 28.4655) rotate(90) scale(929.01 247.369)"
            >
              <stop stopColor="#FFCE47" />
              <stop offset="1" stopColor="#FCBE50" />
            </radialGradient>
            <clipPath id="clip0_81_41">
              <rect width="39" height="33" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className={styles.sunTime}>{sunrise24hours}</div>
      </div>
      <div className={styles.progress}>
        <div className={styles.daylightHours}>
          Daylight hours: {daylightTime}
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressValue}></div>
        </div>
      </div>
      <div>
        <svg
          className={styles.sunIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="33"
          viewBox="0 0 39 33"
          fill="none"
        >
          <g clipPath="url(#clip0_81_50)">
            <path
              d="M15.5999 7.11716L19.4999 10.9258L23.3999 7.11716"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.5 1.40427V10.9258"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.4961 30.4383C10.4614 29.2175 10.6731 28.0022 11.1187 26.8643C11.5642 25.7263 12.2347 24.6888 13.0903 23.8131C13.9459 22.9374 14.9693 22.2413 16.1 21.766C17.2307 21.2906 18.4458 21.0457 19.6733 21.0457C20.9008 21.0457 22.1158 21.2906 23.2465 21.766C24.3772 22.2413 25.4006 22.9374 26.2563 23.8131C27.1119 24.6888 27.7823 25.7263 28.2279 26.8643C28.6735 28.0022 28.8851 29.2175 28.8504 30.4383H10.4961Z"
              fill="url(#paint0_radial_81_50)"
            />
            <path
              d="M13.6854 11.7037C12.9683 9.93837 10.3009 11.0067 11.02 12.7739L13.2252 18.1935C13.9424 19.9607 16.6097 18.8905 15.8906 17.1233L13.6854 11.7037ZM29.3827 12.8348C30.1324 11.0829 27.4843 9.96694 26.7364 11.7189L24.4353 17.1004C23.6875 18.8524 26.3337 19.9702 27.0816 18.2183L29.3827 12.8348ZM38.0884 24.4282C39.868 23.716 38.7903 21.0671 37.0108 21.7812L31.5534 23.9712C29.7758 24.6834 30.8515 27.3323 32.631 26.6181L38.0884 24.4282ZM2.01125 21.7736C0.247088 21.0309 -0.876609 23.6589 0.887557 24.4015L6.30661 26.6867C8.07078 27.4313 9.19639 24.8014 7.43223 24.0588L2.01125 21.7736Z"
              fill="#FBB556"
            />
            <path
              d="M33.8347 30.4384H5.51178C4.8822 30.4384 4.37183 31.0118 4.37183 31.7192C4.37183 32.4266 4.8822 33 5.51178 33H33.8347C34.4642 33 34.9746 32.4266 34.9746 31.7192C34.9746 31.0118 34.4642 30.4384 33.8347 30.4384Z"
              fill="white"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_81_50"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-10.9544 28.3502) rotate(90) scale(891.269 236.868)"
            >
              <stop stopColor="#FFCE47" />
              <stop offset="1" stopColor="#FCBE50" />
            </radialGradient>
            <clipPath id="clip0_81_50">
              <rect width="39" height="33" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className={styles.sunTime}>{sunset24hours}</div>
      </div>
    </div>
  );
}

export default DayProgress;
