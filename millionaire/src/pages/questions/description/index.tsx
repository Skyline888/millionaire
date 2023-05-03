import React, { FC, useCallback, useState, useEffect } from 'react';
import useSound from 'use-sound';
import play from "../../../sounds/play.mp3";
import correct from "../../../sounds/correct.mp3";
import wrong from "../../../sounds/wrong.mp3";
import Variant from './variant';
import './description.css';
import { Answers, QuestionsProps } from '../../../utils/types';
import { getDelay } from '../../../utils/functions';

const Description: FC<QuestionsProps> = ({ question, answers, setQuestionsNumber }) => {
  const [selectAnswer, setAnswer] = useState<Answers>()
  const [answerState, setAnswerState] = useState<string>()
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    // letsPlay();
  }, [letsPlay]);

  const onSelectAnswer = useCallback((answer: Answers) => {
    setAnswer(answer)
    setAnswerState("awswer active")
    getDelay(3000, () => {
      setAnswerState(answer.correct ? "awswer correct" : "awswer incorrect")
    })

    getDelay(5000, () => {
      if(answer.correct) {
        // correctAnswer();
        getDelay(1000, () => {
          setQuestionsNumber((prev) => prev + 1)
        })
      } else {
        // wrongAnswer();
      }
    })
  }, [correctAnswer, setQuestionsNumber, wrongAnswer])

  return (
    <div className="description">
      <div>{question}</div>
      <div className="answer-section">
        {answers.map((answer, index) => (
          <div className={selectAnswer === answer ? answerState : "awswer" }>
            <Variant index={index} text={answer.text} correct={answer.correct} onSelectAnswer={onSelectAnswer} />
          </div>
          
        ))}
      </div> 
    </div>
  )
}

export default Description