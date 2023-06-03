import { SkeletonTheme } from "react-loading-skeleton";
import scssVariables from "./scss/_variables.scss";

import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

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
      </SkeletonTheme>
    </>
  );
};

export default App;
