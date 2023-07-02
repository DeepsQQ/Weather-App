import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.root}>
      Powered by&nbsp;
      <a className={styles.link} href="https://www.weatherapi.com/">
        WeatherAPI.com
      </a>
    </div>
  );
};

export default Footer;
