import React, {
  FC,
  useEffect,
  useState,
} from "react";
import { isMobile } from "react-device-detect";

import questions from "../../utils/questions_info.json";
import { Questions } from "../../utils/types";

import { Description } from "./description";
import { Progress } from "./progress";
import "./questions.css";
import { MobileMenu } from "./mobileMenu";

export const Question: FC = () => {
  const [questionsNumber, setQuestionsNumber] = useState(1);
  const [question, setQuestion] = useState<Questions>();

  useEffect(() => {
    const getQuestion = questions?.find(
      (questionItem) => questionItem?.id === questionsNumber,
    ) as Questions;
    setQuestion(getQuestion);
  }, [question, questionsNumber]);

  return (
    <div className="questions">
      {question && question.answers && (
        /* eslint-disable react/jsx-props-no-spreading */
        <Description {...question} setQuestionsNumber={setQuestionsNumber} />
      )}
      {isMobile ? (
        <MobileMenu questionsNumber={questionsNumber} />
      ) : (
        <Progress questionsNumber={questionsNumber} />
      )}
    </div>
  );
};
