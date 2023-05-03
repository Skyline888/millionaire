import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import "./layout.css";
import { LayoutProps, LayoutType } from "utils/types";
import { getMoneyFromNumber } from "utils/functions";

import hand from "../../images/hand.svg";

export const Layout: FC<LayoutProps> = ({ buttonText, type, goTo, money }) => (
  <div className="layout-page">
    <div className="layout-image-block">
      <img alt="hand" className="layout-image" src={hand} />
    </div>
    <div className="info">
      {type === LayoutType.MAIN ? (
        <div className="info-title">Who wants to be a millionaire? </div>
      ) : (
        <>
          <div className="info-score">Total score: </div>
          <div className="info-money">
            {getMoneyFromNumber(money || 0)}
            {" "}
            earned
          </div>
        </>
      )}
      <NavLink className="info-button" to={goTo}>
        {buttonText}
      </NavLink>
    </div>
  </div>
);
