import React, { FC, useCallback, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import play from "../../../sounds/play.mp3";
import correct from "../../../sounds/correct.mp3";
import wrong from "../../../sounds/wrong.mp3";
import Answer from './answers';
import './description.css';
import { Answers, QuestionsProps } from '../../../utils/types';
import { getDelay } from '../../../utils/functions';
import { ROUTES } from 'utils/routes';

const MAX_QUESTION_NUMBER = 12;

const Description: FC<QuestionsProps> = ({ id, question, answers, setQuestionsNumber }) => {
  const [selectAnswer, setAnswer] = useState<Answers>()
  const [answerState, setAnswerState] = useState<string>("notactive")
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  const navigate = useNavigate();

  const updateInitialState = useCallback(() => {
    setAnswer(undefined)
    setAnswerState("notactive")
  }, [])

  useEffect(() => {
    // letsPlay();
    return () => updateInitialState();
  }, [letsPlay, updateInitialState]);

  

  const onSelectAnswer = useCallback((answer: Answers) => {
    setAnswer(answer)
    setAnswerState("active")
    getDelay(2000, () => {
      setAnswerState(answer.correct ? "correct" : "incorrect")
    })


    getDelay(2000, () => {
      if(answer.correct && MAX_QUESTION_NUMBER !== id) {
        correctAnswer();
        getDelay(2000, () => {
          setQuestionsNumber((prev) => prev + 1)
          updateInitialState()
        })
      } else {
        wrongAnswer();
        getDelay(2000, () => {
          navigate(ROUTES.final, {state: id });
          updateInitialState()
        })
      }
    })
  }, [correctAnswer, id, navigate, setQuestionsNumber, updateInitialState, wrongAnswer])

  return (
    <div className="description">
      <div className="question-title">{question}</div>
      <div className="answer-section">
        {answers.map((answer) => (
            <Answer
              key={answer.order}
              answerState={selectAnswer?.order === answer.order ? answerState : "notactive"}  
              order={answer.order}
              text={answer.text} correct={answer.correct} 
              onSelectAnswer={onSelectAnswer} 
            />
        ))}
      </div> 
    </div>
  )
}

export default Description