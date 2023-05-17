import { SkeletonTheme } from "react-loading-skeleton";
import scssVariables from "./scss/_variables.scss";

import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";

const App = () => {
  return (
    <>
      <SkeletonTheme
        baseColor={scssVariables.primaryColor}
        highlightColor={scssVariables.darkPrimaryColor}
      >
        <Header />
        <CurrentWeather />
      </SkeletonTheme>
    </>
  );
};

export default App;
