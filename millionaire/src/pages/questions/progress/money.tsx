import React, { FC } from "react";

import { getMoneyClass, getMoneyFromNumber } from "utils/functions";
import { MoneyProps } from "utils/types";

import { ReactComponent as MoneyIcon } from "../../../images/Rectangle.svg";

export const Money: FC<MoneyProps> = ({ questionsNumber, value, id }) => (
  <div className={getMoneyClass(questionsNumber, id)}>
    <div className="money-item">
      {getMoneyFromNumber(value)}
      <MoneyIcon />
    </div>
  </div>
);
