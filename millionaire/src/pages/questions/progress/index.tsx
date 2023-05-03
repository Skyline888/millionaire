import React, { FC } from "react";

import "./progress.css";
import { ProgressProps } from "utils/types";

import prices from "../../../utils/questions_price.json";

import { Money } from "./money";

export const Progress: FC<ProgressProps> = ({ questionsNumber }) => (
  <div className="progress">
    {[...prices].reverse().map((price) => (
      <Money
        key={price.id}
        id={price.id}
        questionsNumber={questionsNumber}
        value={price.value}
      />
    ))}
  </div>
);
