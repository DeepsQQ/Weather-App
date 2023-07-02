import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.root}>
      Powered by&nbsp;
      <a className={styles.link} href="https://www.weatherapi.com/">
        WeatherAPI.com
      </a>
    </footer>
  );
};

export default Footer;
