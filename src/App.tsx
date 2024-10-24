import React from "react";
import { calculateDuration } from "./modules/countdown";
import Countdown from "./components/Countdown";
import countdownConfig from "./config/countdown.config.json";

const App: React.FC = () => {
  return (
    <div className="countdown-clock">
      <Countdown startAt={countdownConfig.targetTimeDate} />
    </div>
  );
};

export default App;
