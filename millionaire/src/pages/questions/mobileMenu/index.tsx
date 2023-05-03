import React, { FC, useState } from "react";
import "./mobile.css";
import Hamburger from "hamburger-react";

import { Progress } from "../progress";

interface ProgressProps {
  questionsNumber: number;
}

export const MobileMenu: FC<ProgressProps> = ({ questionsNumber }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mobile-section">
      <div className="mobile-hamburger">
        <Hamburger size={20} toggle={setOpen} toggled={isOpen} />
      </div>
      {isOpen && <Progress questionsNumber={questionsNumber} />}
    </div>
  );
};
