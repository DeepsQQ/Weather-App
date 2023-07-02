import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import scssVariables from "./scss/_variables.scss";

import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <SkeletonTheme
        baseColor={scssVariables.primaryColor}
        highlightColor={scssVariables.darkPrimaryColor}
        borderRadius={10}
        duration={1}
      >
        <Header />
        <CurrentWeather />
        <Forecast />
        <Footer />
      </SkeletonTheme>
    </>
  );
};

export default App;
