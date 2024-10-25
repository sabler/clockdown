import React from "react";
import { HeadlineProps } from "../types";

const Headline: React.FC<HeadlineProps> = ({ copy, highlight }) => {
    return (
      <div className="my-4 text-center">
        <span className={`${highlight ? 'critical' : ''} uppercase text-med font-bold text-cyan-200`}>{copy}</span>
      </div>
    );
  };
  
  export default Headline;