import React from "react";
import { CopyProps } from "../types";

const Paragraph: React.FC<CopyProps> = ({ copy, highlight }) => {
  return (
    <div className="paragraph xxs:text-xs sm:text-sm md:text-med">
      <p className="p-2 text-balance text-center text-white">
     {copy}
      </p>
    </div>
  );
};


export default Paragraph;