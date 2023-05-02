import React, { FC, useEffect, useState } from 'react'
import Description from './description'
import Progress from './progress'
import questions from '../../utils/questions_info.json';
import './questions.css'
import { Questions } from '../../utils/types';


const Question: FC = () => {
  const [questionsNumber, setQuestionsNumber] = useState(1)
  const [question, setQuestion] = useState<Questions>()


  useEffect(() => {
    const getQuestion = questions?.find((question) => question.id === questionsNumber) as Questions;
    setQuestion(getQuestion)
  }, [question, questionsNumber])


  return (
    <div className="questions">
      { question && (
        <Description {...question} />
      )}
      <Progress questionsNumber={questionsNumber} />
    </div>
  )
}

export default Question
