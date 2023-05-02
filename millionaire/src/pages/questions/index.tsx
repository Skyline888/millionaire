import React, { FC, useState } from 'react'
import Description from './description'
import Progress from './progress'
import './questions.css'


const Question: FC = () => {
  const [questionsNumber, setQuestion] = useState(1)
  return (
    <div className="questions">
      <Description questions='ddw' />
      <Progress questionsNumber={questionsNumber} />
    </div>
  )
}

export default Question
