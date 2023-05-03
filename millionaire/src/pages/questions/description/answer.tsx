import React, { FC } from "react";

import { AnswersProps } from "../../../utils/types";
import { ReactComponent as AnswerIcon } from "../../../images/RectangleVariant.svg";

export const Answer: FC<AnswersProps> = ({
  answerState,
  correct,
  onSelectAnswer,
  order,
  text,
}) => (
  <div className={answerState}>
    <div
      className="answers-block"
      role="button"
      tabIndex={0}
      onClick={() => onSelectAnswer({
        correct, order, text,
      })}
      onKeyDown={() => onSelectAnswer({
        correct, order, text,
      })}
    >
      <AnswerIcon />
      <div className="answers-text">
        <div className="answers-order">{order}</div>
        {text}
      </div>
    </div>
  </div>
);
