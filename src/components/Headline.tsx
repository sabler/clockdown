import React from "react";
import { CopyProps } from "../types";

const Headline: React.FC<CopyProps> = ({ copy, highlight }) => {
    return (
      <div className="headline my-4 text-center">
        <span className="uppercase text-med font-bold text-cyan-200">{copy}</span>
      </div>
    );
  };
  
  export default Headline;