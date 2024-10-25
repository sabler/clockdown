import React from "react";
import Headline from "./components/Headline";
import Countdown from "./components/Countdown";
import countdownConfig from "./config/countdown.config.json";

const App: React.FC = () => {
  return (
    <>
    <Headline copy="The 2024 US election is only" highlight={true}/>
    <div className="countdown-clock">
      <Countdown startAt={countdownConfig.targetTimeDate} />
      <Headline copy="from now" highlight={true}/>
    </div>

    </>
  );
};

export default App;
