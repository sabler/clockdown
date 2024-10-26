import React from "react";
import Paragraph from "./components/Paragraph";
import Countdown from "./components/Countdown";
import countdownConfig from "./config/countdown.config.json";

const App: React.FC = () => {
  return (
    <>
    <Paragraph copy={countdownConfig.mainCopy}/>

      <div className="countdown-clock">
        <Countdown startAt={countdownConfig.targetTimeDate} />
      </div>
      
    </>
  );
};

export default App;
